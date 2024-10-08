#pragma once
#if defined(RCT_NEW_ARCH_ENABLED) || defined(ANDROID)

#include "MarkdownShadowFamilyRegistry.h"
#include "MarkdownTextInputDecoratorState.h"
#include <jsi/jsi.h>
#include <react/renderer/components/RNLiveMarkdownSpec/EventEmitters.h>
#include <react/renderer/components/RNLiveMarkdownSpec/Props.h>
#include <react/renderer/components/view/ConcreteViewShadowNode.h>

namespace facebook {
namespace react {

struct OwningShadowNodeFragment {
  Props::Shared props;
  ShadowNode::SharedListOfShared children;
  State::Shared state;
  
  operator ShadowNodeFragment() const {
    return ShadowNodeFragment {
      .props = props,
      .children = children,
      .state = state
    };
  }
};

JSI_EXPORT extern const char MarkdownTextInputDecoratorViewComponentName[];

class JSI_EXPORT MarkdownTextInputDecoratorShadowNode final
    : public ConcreteViewShadowNode<MarkdownTextInputDecoratorViewComponentName,
                                    MarkdownTextInputDecoratorViewProps,
                                    MarkdownTextInputDecoratorViewEventEmitter,
                                    MarkdownTextInputDecoratorState> {
public:
  MarkdownTextInputDecoratorShadowNode(ShadowNodeFragment const &fragment,
                                       ShadowNodeFamily::Shared const &family,
                                       ShadowNodeTraits traits)
      : ConcreteViewShadowNode(updateFragmentState(fragment, family),
                               family, traits) {}

  MarkdownTextInputDecoratorShadowNode(ShadowNode const &sourceShadowNode,
                                       ShadowNodeFragment const &fragment)
      : ConcreteViewShadowNode(sourceShadowNode, fragment) {
    // if the props changed, we need to update the shadow node state to reflect
    // potential style changes
    if (fragment.props != ShadowNodeFragment::propsPlaceholder()) {
      MarkdownShadowFamilyRegistry::forceNextStateUpdate(this->getTag());
    }
  }

private:
  static const OwningShadowNodeFragment
  updateFragmentState(ShadowNodeFragment const &fragment,
                      ShadowNodeFamily::Shared const &family);
};

} // namespace react
} // namespace facebook

#endif
