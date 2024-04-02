"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb2, mod) => function __require() {
    return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/html-entities/lib/named-references.js
  var require_named_references = __commonJS({
    "node_modules/html-entities/lib/named-references.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bodyRegExps = { xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g };
      exports.namedReferences = { xml: { entities: { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'", "&amp;": "&" }, characters: { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;", "&": "&amp;" } }, html4: { entities: { "&apos;": "'", "&nbsp": "\xA0", "&nbsp;": "\xA0", "&iexcl": "\xA1", "&iexcl;": "\xA1", "&cent": "\xA2", "&cent;": "\xA2", "&pound": "\xA3", "&pound;": "\xA3", "&curren": "\xA4", "&curren;": "\xA4", "&yen": "\xA5", "&yen;": "\xA5", "&brvbar": "\xA6", "&brvbar;": "\xA6", "&sect": "\xA7", "&sect;": "\xA7", "&uml": "\xA8", "&uml;": "\xA8", "&copy": "\xA9", "&copy;": "\xA9", "&ordf": "\xAA", "&ordf;": "\xAA", "&laquo": "\xAB", "&laquo;": "\xAB", "&not": "\xAC", "&not;": "\xAC", "&shy": "\xAD", "&shy;": "\xAD", "&reg": "\xAE", "&reg;": "\xAE", "&macr": "\xAF", "&macr;": "\xAF", "&deg": "\xB0", "&deg;": "\xB0", "&plusmn": "\xB1", "&plusmn;": "\xB1", "&sup2": "\xB2", "&sup2;": "\xB2", "&sup3": "\xB3", "&sup3;": "\xB3", "&acute": "\xB4", "&acute;": "\xB4", "&micro": "\xB5", "&micro;": "\xB5", "&para": "\xB6", "&para;": "\xB6", "&middot": "\xB7", "&middot;": "\xB7", "&cedil": "\xB8", "&cedil;": "\xB8", "&sup1": "\xB9", "&sup1;": "\xB9", "&ordm": "\xBA", "&ordm;": "\xBA", "&raquo": "\xBB", "&raquo;": "\xBB", "&frac14": "\xBC", "&frac14;": "\xBC", "&frac12": "\xBD", "&frac12;": "\xBD", "&frac34": "\xBE", "&frac34;": "\xBE", "&iquest": "\xBF", "&iquest;": "\xBF", "&Agrave": "\xC0", "&Agrave;": "\xC0", "&Aacute": "\xC1", "&Aacute;": "\xC1", "&Acirc": "\xC2", "&Acirc;": "\xC2", "&Atilde": "\xC3", "&Atilde;": "\xC3", "&Auml": "\xC4", "&Auml;": "\xC4", "&Aring": "\xC5", "&Aring;": "\xC5", "&AElig": "\xC6", "&AElig;": "\xC6", "&Ccedil": "\xC7", "&Ccedil;": "\xC7", "&Egrave": "\xC8", "&Egrave;": "\xC8", "&Eacute": "\xC9", "&Eacute;": "\xC9", "&Ecirc": "\xCA", "&Ecirc;": "\xCA", "&Euml": "\xCB", "&Euml;": "\xCB", "&Igrave": "\xCC", "&Igrave;": "\xCC", "&Iacute": "\xCD", "&Iacute;": "\xCD", "&Icirc": "\xCE", "&Icirc;": "\xCE", "&Iuml": "\xCF", "&Iuml;": "\xCF", "&ETH": "\xD0", "&ETH;": "\xD0", "&Ntilde": "\xD1", "&Ntilde;": "\xD1", "&Ograve": "\xD2", "&Ograve;": "\xD2", "&Oacute": "\xD3", "&Oacute;": "\xD3", "&Ocirc": "\xD4", "&Ocirc;": "\xD4", "&Otilde": "\xD5", "&Otilde;": "\xD5", "&Ouml": "\xD6", "&Ouml;": "\xD6", "&times": "\xD7", "&times;": "\xD7", "&Oslash": "\xD8", "&Oslash;": "\xD8", "&Ugrave": "\xD9", "&Ugrave;": "\xD9", "&Uacute": "\xDA", "&Uacute;": "\xDA", "&Ucirc": "\xDB", "&Ucirc;": "\xDB", "&Uuml": "\xDC", "&Uuml;": "\xDC", "&Yacute": "\xDD", "&Yacute;": "\xDD", "&THORN": "\xDE", "&THORN;": "\xDE", "&szlig": "\xDF", "&szlig;": "\xDF", "&agrave": "\xE0", "&agrave;": "\xE0", "&aacute": "\xE1", "&aacute;": "\xE1", "&acirc": "\xE2", "&acirc;": "\xE2", "&atilde": "\xE3", "&atilde;": "\xE3", "&auml": "\xE4", "&auml;": "\xE4", "&aring": "\xE5", "&aring;": "\xE5", "&aelig": "\xE6", "&aelig;": "\xE6", "&ccedil": "\xE7", "&ccedil;": "\xE7", "&egrave": "\xE8", "&egrave;": "\xE8", "&eacute": "\xE9", "&eacute;": "\xE9", "&ecirc": "\xEA", "&ecirc;": "\xEA", "&euml": "\xEB", "&euml;": "\xEB", "&igrave": "\xEC", "&igrave;": "\xEC", "&iacute": "\xED", "&iacute;": "\xED", "&icirc": "\xEE", "&icirc;": "\xEE", "&iuml": "\xEF", "&iuml;": "\xEF", "&eth": "\xF0", "&eth;": "\xF0", "&ntilde": "\xF1", "&ntilde;": "\xF1", "&ograve": "\xF2", "&ograve;": "\xF2", "&oacute": "\xF3", "&oacute;": "\xF3", "&ocirc": "\xF4", "&ocirc;": "\xF4", "&otilde": "\xF5", "&otilde;": "\xF5", "&ouml": "\xF6", "&ouml;": "\xF6", "&divide": "\xF7", "&divide;": "\xF7", "&oslash": "\xF8", "&oslash;": "\xF8", "&ugrave": "\xF9", "&ugrave;": "\xF9", "&uacute": "\xFA", "&uacute;": "\xFA", "&ucirc": "\xFB", "&ucirc;": "\xFB", "&uuml": "\xFC", "&uuml;": "\xFC", "&yacute": "\xFD", "&yacute;": "\xFD", "&thorn": "\xFE", "&thorn;": "\xFE", "&yuml": "\xFF", "&yuml;": "\xFF", "&quot": '"', "&quot;": '"', "&amp": "&", "&amp;": "&", "&lt": "<", "&lt;": "<", "&gt": ">", "&gt;": ">", "&OElig;": "\u0152", "&oelig;": "\u0153", "&Scaron;": "\u0160", "&scaron;": "\u0161", "&Yuml;": "\u0178", "&circ;": "\u02C6", "&tilde;": "\u02DC", "&ensp;": "\u2002", "&emsp;": "\u2003", "&thinsp;": "\u2009", "&zwnj;": "\u200C", "&zwj;": "\u200D", "&lrm;": "\u200E", "&rlm;": "\u200F", "&ndash;": "\u2013", "&mdash;": "\u2014", "&lsquo;": "\u2018", "&rsquo;": "\u2019", "&sbquo;": "\u201A", "&ldquo;": "\u201C", "&rdquo;": "\u201D", "&bdquo;": "\u201E", "&dagger;": "\u2020", "&Dagger;": "\u2021", "&permil;": "\u2030", "&lsaquo;": "\u2039", "&rsaquo;": "\u203A", "&euro;": "\u20AC", "&fnof;": "\u0192", "&Alpha;": "\u0391", "&Beta;": "\u0392", "&Gamma;": "\u0393", "&Delta;": "\u0394", "&Epsilon;": "\u0395", "&Zeta;": "\u0396", "&Eta;": "\u0397", "&Theta;": "\u0398", "&Iota;": "\u0399", "&Kappa;": "\u039A", "&Lambda;": "\u039B", "&Mu;": "\u039C", "&Nu;": "\u039D", "&Xi;": "\u039E", "&Omicron;": "\u039F", "&Pi;": "\u03A0", "&Rho;": "\u03A1", "&Sigma;": "\u03A3", "&Tau;": "\u03A4", "&Upsilon;": "\u03A5", "&Phi;": "\u03A6", "&Chi;": "\u03A7", "&Psi;": "\u03A8", "&Omega;": "\u03A9", "&alpha;": "\u03B1", "&beta;": "\u03B2", "&gamma;": "\u03B3", "&delta;": "\u03B4", "&epsilon;": "\u03B5", "&zeta;": "\u03B6", "&eta;": "\u03B7", "&theta;": "\u03B8", "&iota;": "\u03B9", "&kappa;": "\u03BA", "&lambda;": "\u03BB", "&mu;": "\u03BC", "&nu;": "\u03BD", "&xi;": "\u03BE", "&omicron;": "\u03BF", "&pi;": "\u03C0", "&rho;": "\u03C1", "&sigmaf;": "\u03C2", "&sigma;": "\u03C3", "&tau;": "\u03C4", "&upsilon;": "\u03C5", "&phi;": "\u03C6", "&chi;": "\u03C7", "&psi;": "\u03C8", "&omega;": "\u03C9", "&thetasym;": "\u03D1", "&upsih;": "\u03D2", "&piv;": "\u03D6", "&bull;": "\u2022", "&hellip;": "\u2026", "&prime;": "\u2032", "&Prime;": "\u2033", "&oline;": "\u203E", "&frasl;": "\u2044", "&weierp;": "\u2118", "&image;": "\u2111", "&real;": "\u211C", "&trade;": "\u2122", "&alefsym;": "\u2135", "&larr;": "\u2190", "&uarr;": "\u2191", "&rarr;": "\u2192", "&darr;": "\u2193", "&harr;": "\u2194", "&crarr;": "\u21B5", "&lArr;": "\u21D0", "&uArr;": "\u21D1", "&rArr;": "\u21D2", "&dArr;": "\u21D3", "&hArr;": "\u21D4", "&forall;": "\u2200", "&part;": "\u2202", "&exist;": "\u2203", "&empty;": "\u2205", "&nabla;": "\u2207", "&isin;": "\u2208", "&notin;": "\u2209", "&ni;": "\u220B", "&prod;": "\u220F", "&sum;": "\u2211", "&minus;": "\u2212", "&lowast;": "\u2217", "&radic;": "\u221A", "&prop;": "\u221D", "&infin;": "\u221E", "&ang;": "\u2220", "&and;": "\u2227", "&or;": "\u2228", "&cap;": "\u2229", "&cup;": "\u222A", "&int;": "\u222B", "&there4;": "\u2234", "&sim;": "\u223C", "&cong;": "\u2245", "&asymp;": "\u2248", "&ne;": "\u2260", "&equiv;": "\u2261", "&le;": "\u2264", "&ge;": "\u2265", "&sub;": "\u2282", "&sup;": "\u2283", "&nsub;": "\u2284", "&sube;": "\u2286", "&supe;": "\u2287", "&oplus;": "\u2295", "&otimes;": "\u2297", "&perp;": "\u22A5", "&sdot;": "\u22C5", "&lceil;": "\u2308", "&rceil;": "\u2309", "&lfloor;": "\u230A", "&rfloor;": "\u230B", "&lang;": "\u2329", "&rang;": "\u232A", "&loz;": "\u25CA", "&spades;": "\u2660", "&clubs;": "\u2663", "&hearts;": "\u2665", "&diams;": "\u2666" }, characters: { "'": "&apos;", "\xA0": "&nbsp;", "\xA1": "&iexcl;", "\xA2": "&cent;", "\xA3": "&pound;", "\xA4": "&curren;", "\xA5": "&yen;", "\xA6": "&brvbar;", "\xA7": "&sect;", "\xA8": "&uml;", "\xA9": "&copy;", "\xAA": "&ordf;", "\xAB": "&laquo;", "\xAC": "&not;", "\xAD": "&shy;", "\xAE": "&reg;", "\xAF": "&macr;", "\xB0": "&deg;", "\xB1": "&plusmn;", "\xB2": "&sup2;", "\xB3": "&sup3;", "\xB4": "&acute;", "\xB5": "&micro;", "\xB6": "&para;", "\xB7": "&middot;", "\xB8": "&cedil;", "\xB9": "&sup1;", "\xBA": "&ordm;", "\xBB": "&raquo;", "\xBC": "&frac14;", "\xBD": "&frac12;", "\xBE": "&frac34;", "\xBF": "&iquest;", "\xC0": "&Agrave;", "\xC1": "&Aacute;", "\xC2": "&Acirc;", "\xC3": "&Atilde;", "\xC4": "&Auml;", "\xC5": "&Aring;", "\xC6": "&AElig;", "\xC7": "&Ccedil;", "\xC8": "&Egrave;", "\xC9": "&Eacute;", "\xCA": "&Ecirc;", "\xCB": "&Euml;", "\xCC": "&Igrave;", "\xCD": "&Iacute;", "\xCE": "&Icirc;", "\xCF": "&Iuml;", "\xD0": "&ETH;", "\xD1": "&Ntilde;", "\xD2": "&Ograve;", "\xD3": "&Oacute;", "\xD4": "&Ocirc;", "\xD5": "&Otilde;", "\xD6": "&Ouml;", "\xD7": "&times;", "\xD8": "&Oslash;", "\xD9": "&Ugrave;", "\xDA": "&Uacute;", "\xDB": "&Ucirc;", "\xDC": "&Uuml;", "\xDD": "&Yacute;", "\xDE": "&THORN;", "\xDF": "&szlig;", "\xE0": "&agrave;", "\xE1": "&aacute;", "\xE2": "&acirc;", "\xE3": "&atilde;", "\xE4": "&auml;", "\xE5": "&aring;", "\xE6": "&aelig;", "\xE7": "&ccedil;", "\xE8": "&egrave;", "\xE9": "&eacute;", "\xEA": "&ecirc;", "\xEB": "&euml;", "\xEC": "&igrave;", "\xED": "&iacute;", "\xEE": "&icirc;", "\xEF": "&iuml;", "\xF0": "&eth;", "\xF1": "&ntilde;", "\xF2": "&ograve;", "\xF3": "&oacute;", "\xF4": "&ocirc;", "\xF5": "&otilde;", "\xF6": "&ouml;", "\xF7": "&divide;", "\xF8": "&oslash;", "\xF9": "&ugrave;", "\xFA": "&uacute;", "\xFB": "&ucirc;", "\xFC": "&uuml;", "\xFD": "&yacute;", "\xFE": "&thorn;", "\xFF": "&yuml;", '"': "&quot;", "&": "&amp;", "<": "&lt;", ">": "&gt;", "\u0152": "&OElig;", "\u0153": "&oelig;", "\u0160": "&Scaron;", "\u0161": "&scaron;", "\u0178": "&Yuml;", "\u02C6": "&circ;", "\u02DC": "&tilde;", "\u2002": "&ensp;", "\u2003": "&emsp;", "\u2009": "&thinsp;", "\u200C": "&zwnj;", "\u200D": "&zwj;", "\u200E": "&lrm;", "\u200F": "&rlm;", "\u2013": "&ndash;", "\u2014": "&mdash;", "\u2018": "&lsquo;", "\u2019": "&rsquo;", "\u201A": "&sbquo;", "\u201C": "&ldquo;", "\u201D": "&rdquo;", "\u201E": "&bdquo;", "\u2020": "&dagger;", "\u2021": "&Dagger;", "\u2030": "&permil;", "\u2039": "&lsaquo;", "\u203A": "&rsaquo;", "\u20AC": "&euro;", "\u0192": "&fnof;", "\u0391": "&Alpha;", "\u0392": "&Beta;", "\u0393": "&Gamma;", "\u0394": "&Delta;", "\u0395": "&Epsilon;", "\u0396": "&Zeta;", "\u0397": "&Eta;", "\u0398": "&Theta;", "\u0399": "&Iota;", "\u039A": "&Kappa;", "\u039B": "&Lambda;", "\u039C": "&Mu;", "\u039D": "&Nu;", "\u039E": "&Xi;", "\u039F": "&Omicron;", "\u03A0": "&Pi;", "\u03A1": "&Rho;", "\u03A3": "&Sigma;", "\u03A4": "&Tau;", "\u03A5": "&Upsilon;", "\u03A6": "&Phi;", "\u03A7": "&Chi;", "\u03A8": "&Psi;", "\u03A9": "&Omega;", "\u03B1": "&alpha;", "\u03B2": "&beta;", "\u03B3": "&gamma;", "\u03B4": "&delta;", "\u03B5": "&epsilon;", "\u03B6": "&zeta;", "\u03B7": "&eta;", "\u03B8": "&theta;", "\u03B9": "&iota;", "\u03BA": "&kappa;", "\u03BB": "&lambda;", "\u03BC": "&mu;", "\u03BD": "&nu;", "\u03BE": "&xi;", "\u03BF": "&omicron;", "\u03C0": "&pi;", "\u03C1": "&rho;", "\u03C2": "&sigmaf;", "\u03C3": "&sigma;", "\u03C4": "&tau;", "\u03C5": "&upsilon;", "\u03C6": "&phi;", "\u03C7": "&chi;", "\u03C8": "&psi;", "\u03C9": "&omega;", "\u03D1": "&thetasym;", "\u03D2": "&upsih;", "\u03D6": "&piv;", "\u2022": "&bull;", "\u2026": "&hellip;", "\u2032": "&prime;", "\u2033": "&Prime;", "\u203E": "&oline;", "\u2044": "&frasl;", "\u2118": "&weierp;", "\u2111": "&image;", "\u211C": "&real;", "\u2122": "&trade;", "\u2135": "&alefsym;", "\u2190": "&larr;", "\u2191": "&uarr;", "\u2192": "&rarr;", "\u2193": "&darr;", "\u2194": "&harr;", "\u21B5": "&crarr;", "\u21D0": "&lArr;", "\u21D1": "&uArr;", "\u21D2": "&rArr;", "\u21D3": "&dArr;", "\u21D4": "&hArr;", "\u2200": "&forall;", "\u2202": "&part;", "\u2203": "&exist;", "\u2205": "&empty;", "\u2207": "&nabla;", "\u2208": "&isin;", "\u2209": "&notin;", "\u220B": "&ni;", "\u220F": "&prod;", "\u2211": "&sum;", "\u2212": "&minus;", "\u2217": "&lowast;", "\u221A": "&radic;", "\u221D": "&prop;", "\u221E": "&infin;", "\u2220": "&ang;", "\u2227": "&and;", "\u2228": "&or;", "\u2229": "&cap;", "\u222A": "&cup;", "\u222B": "&int;", "\u2234": "&there4;", "\u223C": "&sim;", "\u2245": "&cong;", "\u2248": "&asymp;", "\u2260": "&ne;", "\u2261": "&equiv;", "\u2264": "&le;", "\u2265": "&ge;", "\u2282": "&sub;", "\u2283": "&sup;", "\u2284": "&nsub;", "\u2286": "&sube;", "\u2287": "&supe;", "\u2295": "&oplus;", "\u2297": "&otimes;", "\u22A5": "&perp;", "\u22C5": "&sdot;", "\u2308": "&lceil;", "\u2309": "&rceil;", "\u230A": "&lfloor;", "\u230B": "&rfloor;", "\u2329": "&lang;", "\u232A": "&rang;", "\u25CA": "&loz;", "\u2660": "&spades;", "\u2663": "&clubs;", "\u2665": "&hearts;", "\u2666": "&diams;" } }, html5: { entities: { "&AElig": "\xC6", "&AElig;": "\xC6", "&AMP": "&", "&AMP;": "&", "&Aacute": "\xC1", "&Aacute;": "\xC1", "&Abreve;": "\u0102", "&Acirc": "\xC2", "&Acirc;": "\xC2", "&Acy;": "\u0410", "&Afr;": "\u{1D504}", "&Agrave": "\xC0", "&Agrave;": "\xC0", "&Alpha;": "\u0391", "&Amacr;": "\u0100", "&And;": "\u2A53", "&Aogon;": "\u0104", "&Aopf;": "\u{1D538}", "&ApplyFunction;": "\u2061", "&Aring": "\xC5", "&Aring;": "\xC5", "&Ascr;": "\u{1D49C}", "&Assign;": "\u2254", "&Atilde": "\xC3", "&Atilde;": "\xC3", "&Auml": "\xC4", "&Auml;": "\xC4", "&Backslash;": "\u2216", "&Barv;": "\u2AE7", "&Barwed;": "\u2306", "&Bcy;": "\u0411", "&Because;": "\u2235", "&Bernoullis;": "\u212C", "&Beta;": "\u0392", "&Bfr;": "\u{1D505}", "&Bopf;": "\u{1D539}", "&Breve;": "\u02D8", "&Bscr;": "\u212C", "&Bumpeq;": "\u224E", "&CHcy;": "\u0427", "&COPY": "\xA9", "&COPY;": "\xA9", "&Cacute;": "\u0106", "&Cap;": "\u22D2", "&CapitalDifferentialD;": "\u2145", "&Cayleys;": "\u212D", "&Ccaron;": "\u010C", "&Ccedil": "\xC7", "&Ccedil;": "\xC7", "&Ccirc;": "\u0108", "&Cconint;": "\u2230", "&Cdot;": "\u010A", "&Cedilla;": "\xB8", "&CenterDot;": "\xB7", "&Cfr;": "\u212D", "&Chi;": "\u03A7", "&CircleDot;": "\u2299", "&CircleMinus;": "\u2296", "&CirclePlus;": "\u2295", "&CircleTimes;": "\u2297", "&ClockwiseContourIntegral;": "\u2232", "&CloseCurlyDoubleQuote;": "\u201D", "&CloseCurlyQuote;": "\u2019", "&Colon;": "\u2237", "&Colone;": "\u2A74", "&Congruent;": "\u2261", "&Conint;": "\u222F", "&ContourIntegral;": "\u222E", "&Copf;": "\u2102", "&Coproduct;": "\u2210", "&CounterClockwiseContourIntegral;": "\u2233", "&Cross;": "\u2A2F", "&Cscr;": "\u{1D49E}", "&Cup;": "\u22D3", "&CupCap;": "\u224D", "&DD;": "\u2145", "&DDotrahd;": "\u2911", "&DJcy;": "\u0402", "&DScy;": "\u0405", "&DZcy;": "\u040F", "&Dagger;": "\u2021", "&Darr;": "\u21A1", "&Dashv;": "\u2AE4", "&Dcaron;": "\u010E", "&Dcy;": "\u0414", "&Del;": "\u2207", "&Delta;": "\u0394", "&Dfr;": "\u{1D507}", "&DiacriticalAcute;": "\xB4", "&DiacriticalDot;": "\u02D9", "&DiacriticalDoubleAcute;": "\u02DD", "&DiacriticalGrave;": "`", "&DiacriticalTilde;": "\u02DC", "&Diamond;": "\u22C4", "&DifferentialD;": "\u2146", "&Dopf;": "\u{1D53B}", "&Dot;": "\xA8", "&DotDot;": "\u20DC", "&DotEqual;": "\u2250", "&DoubleContourIntegral;": "\u222F", "&DoubleDot;": "\xA8", "&DoubleDownArrow;": "\u21D3", "&DoubleLeftArrow;": "\u21D0", "&DoubleLeftRightArrow;": "\u21D4", "&DoubleLeftTee;": "\u2AE4", "&DoubleLongLeftArrow;": "\u27F8", "&DoubleLongLeftRightArrow;": "\u27FA", "&DoubleLongRightArrow;": "\u27F9", "&DoubleRightArrow;": "\u21D2", "&DoubleRightTee;": "\u22A8", "&DoubleUpArrow;": "\u21D1", "&DoubleUpDownArrow;": "\u21D5", "&DoubleVerticalBar;": "\u2225", "&DownArrow;": "\u2193", "&DownArrowBar;": "\u2913", "&DownArrowUpArrow;": "\u21F5", "&DownBreve;": "\u0311", "&DownLeftRightVector;": "\u2950", "&DownLeftTeeVector;": "\u295E", "&DownLeftVector;": "\u21BD", "&DownLeftVectorBar;": "\u2956", "&DownRightTeeVector;": "\u295F", "&DownRightVector;": "\u21C1", "&DownRightVectorBar;": "\u2957", "&DownTee;": "\u22A4", "&DownTeeArrow;": "\u21A7", "&Downarrow;": "\u21D3", "&Dscr;": "\u{1D49F}", "&Dstrok;": "\u0110", "&ENG;": "\u014A", "&ETH": "\xD0", "&ETH;": "\xD0", "&Eacute": "\xC9", "&Eacute;": "\xC9", "&Ecaron;": "\u011A", "&Ecirc": "\xCA", "&Ecirc;": "\xCA", "&Ecy;": "\u042D", "&Edot;": "\u0116", "&Efr;": "\u{1D508}", "&Egrave": "\xC8", "&Egrave;": "\xC8", "&Element;": "\u2208", "&Emacr;": "\u0112", "&EmptySmallSquare;": "\u25FB", "&EmptyVerySmallSquare;": "\u25AB", "&Eogon;": "\u0118", "&Eopf;": "\u{1D53C}", "&Epsilon;": "\u0395", "&Equal;": "\u2A75", "&EqualTilde;": "\u2242", "&Equilibrium;": "\u21CC", "&Escr;": "\u2130", "&Esim;": "\u2A73", "&Eta;": "\u0397", "&Euml": "\xCB", "&Euml;": "\xCB", "&Exists;": "\u2203", "&ExponentialE;": "\u2147", "&Fcy;": "\u0424", "&Ffr;": "\u{1D509}", "&FilledSmallSquare;": "\u25FC", "&FilledVerySmallSquare;": "\u25AA", "&Fopf;": "\u{1D53D}", "&ForAll;": "\u2200", "&Fouriertrf;": "\u2131", "&Fscr;": "\u2131", "&GJcy;": "\u0403", "&GT": ">", "&GT;": ">", "&Gamma;": "\u0393", "&Gammad;": "\u03DC", "&Gbreve;": "\u011E", "&Gcedil;": "\u0122", "&Gcirc;": "\u011C", "&Gcy;": "\u0413", "&Gdot;": "\u0120", "&Gfr;": "\u{1D50A}", "&Gg;": "\u22D9", "&Gopf;": "\u{1D53E}", "&GreaterEqual;": "\u2265", "&GreaterEqualLess;": "\u22DB", "&GreaterFullEqual;": "\u2267", "&GreaterGreater;": "\u2AA2", "&GreaterLess;": "\u2277", "&GreaterSlantEqual;": "\u2A7E", "&GreaterTilde;": "\u2273", "&Gscr;": "\u{1D4A2}", "&Gt;": "\u226B", "&HARDcy;": "\u042A", "&Hacek;": "\u02C7", "&Hat;": "^", "&Hcirc;": "\u0124", "&Hfr;": "\u210C", "&HilbertSpace;": "\u210B", "&Hopf;": "\u210D", "&HorizontalLine;": "\u2500", "&Hscr;": "\u210B", "&Hstrok;": "\u0126", "&HumpDownHump;": "\u224E", "&HumpEqual;": "\u224F", "&IEcy;": "\u0415", "&IJlig;": "\u0132", "&IOcy;": "\u0401", "&Iacute": "\xCD", "&Iacute;": "\xCD", "&Icirc": "\xCE", "&Icirc;": "\xCE", "&Icy;": "\u0418", "&Idot;": "\u0130", "&Ifr;": "\u2111", "&Igrave": "\xCC", "&Igrave;": "\xCC", "&Im;": "\u2111", "&Imacr;": "\u012A", "&ImaginaryI;": "\u2148", "&Implies;": "\u21D2", "&Int;": "\u222C", "&Integral;": "\u222B", "&Intersection;": "\u22C2", "&InvisibleComma;": "\u2063", "&InvisibleTimes;": "\u2062", "&Iogon;": "\u012E", "&Iopf;": "\u{1D540}", "&Iota;": "\u0399", "&Iscr;": "\u2110", "&Itilde;": "\u0128", "&Iukcy;": "\u0406", "&Iuml": "\xCF", "&Iuml;": "\xCF", "&Jcirc;": "\u0134", "&Jcy;": "\u0419", "&Jfr;": "\u{1D50D}", "&Jopf;": "\u{1D541}", "&Jscr;": "\u{1D4A5}", "&Jsercy;": "\u0408", "&Jukcy;": "\u0404", "&KHcy;": "\u0425", "&KJcy;": "\u040C", "&Kappa;": "\u039A", "&Kcedil;": "\u0136", "&Kcy;": "\u041A", "&Kfr;": "\u{1D50E}", "&Kopf;": "\u{1D542}", "&Kscr;": "\u{1D4A6}", "&LJcy;": "\u0409", "&LT": "<", "&LT;": "<", "&Lacute;": "\u0139", "&Lambda;": "\u039B", "&Lang;": "\u27EA", "&Laplacetrf;": "\u2112", "&Larr;": "\u219E", "&Lcaron;": "\u013D", "&Lcedil;": "\u013B", "&Lcy;": "\u041B", "&LeftAngleBracket;": "\u27E8", "&LeftArrow;": "\u2190", "&LeftArrowBar;": "\u21E4", "&LeftArrowRightArrow;": "\u21C6", "&LeftCeiling;": "\u2308", "&LeftDoubleBracket;": "\u27E6", "&LeftDownTeeVector;": "\u2961", "&LeftDownVector;": "\u21C3", "&LeftDownVectorBar;": "\u2959", "&LeftFloor;": "\u230A", "&LeftRightArrow;": "\u2194", "&LeftRightVector;": "\u294E", "&LeftTee;": "\u22A3", "&LeftTeeArrow;": "\u21A4", "&LeftTeeVector;": "\u295A", "&LeftTriangle;": "\u22B2", "&LeftTriangleBar;": "\u29CF", "&LeftTriangleEqual;": "\u22B4", "&LeftUpDownVector;": "\u2951", "&LeftUpTeeVector;": "\u2960", "&LeftUpVector;": "\u21BF", "&LeftUpVectorBar;": "\u2958", "&LeftVector;": "\u21BC", "&LeftVectorBar;": "\u2952", "&Leftarrow;": "\u21D0", "&Leftrightarrow;": "\u21D4", "&LessEqualGreater;": "\u22DA", "&LessFullEqual;": "\u2266", "&LessGreater;": "\u2276", "&LessLess;": "\u2AA1", "&LessSlantEqual;": "\u2A7D", "&LessTilde;": "\u2272", "&Lfr;": "\u{1D50F}", "&Ll;": "\u22D8", "&Lleftarrow;": "\u21DA", "&Lmidot;": "\u013F", "&LongLeftArrow;": "\u27F5", "&LongLeftRightArrow;": "\u27F7", "&LongRightArrow;": "\u27F6", "&Longleftarrow;": "\u27F8", "&Longleftrightarrow;": "\u27FA", "&Longrightarrow;": "\u27F9", "&Lopf;": "\u{1D543}", "&LowerLeftArrow;": "\u2199", "&LowerRightArrow;": "\u2198", "&Lscr;": "\u2112", "&Lsh;": "\u21B0", "&Lstrok;": "\u0141", "&Lt;": "\u226A", "&Map;": "\u2905", "&Mcy;": "\u041C", "&MediumSpace;": "\u205F", "&Mellintrf;": "\u2133", "&Mfr;": "\u{1D510}", "&MinusPlus;": "\u2213", "&Mopf;": "\u{1D544}", "&Mscr;": "\u2133", "&Mu;": "\u039C", "&NJcy;": "\u040A", "&Nacute;": "\u0143", "&Ncaron;": "\u0147", "&Ncedil;": "\u0145", "&Ncy;": "\u041D", "&NegativeMediumSpace;": "\u200B", "&NegativeThickSpace;": "\u200B", "&NegativeThinSpace;": "\u200B", "&NegativeVeryThinSpace;": "\u200B", "&NestedGreaterGreater;": "\u226B", "&NestedLessLess;": "\u226A", "&NewLine;": "\n", "&Nfr;": "\u{1D511}", "&NoBreak;": "\u2060", "&NonBreakingSpace;": "\xA0", "&Nopf;": "\u2115", "&Not;": "\u2AEC", "&NotCongruent;": "\u2262", "&NotCupCap;": "\u226D", "&NotDoubleVerticalBar;": "\u2226", "&NotElement;": "\u2209", "&NotEqual;": "\u2260", "&NotEqualTilde;": "\u2242\u0338", "&NotExists;": "\u2204", "&NotGreater;": "\u226F", "&NotGreaterEqual;": "\u2271", "&NotGreaterFullEqual;": "\u2267\u0338", "&NotGreaterGreater;": "\u226B\u0338", "&NotGreaterLess;": "\u2279", "&NotGreaterSlantEqual;": "\u2A7E\u0338", "&NotGreaterTilde;": "\u2275", "&NotHumpDownHump;": "\u224E\u0338", "&NotHumpEqual;": "\u224F\u0338", "&NotLeftTriangle;": "\u22EA", "&NotLeftTriangleBar;": "\u29CF\u0338", "&NotLeftTriangleEqual;": "\u22EC", "&NotLess;": "\u226E", "&NotLessEqual;": "\u2270", "&NotLessGreater;": "\u2278", "&NotLessLess;": "\u226A\u0338", "&NotLessSlantEqual;": "\u2A7D\u0338", "&NotLessTilde;": "\u2274", "&NotNestedGreaterGreater;": "\u2AA2\u0338", "&NotNestedLessLess;": "\u2AA1\u0338", "&NotPrecedes;": "\u2280", "&NotPrecedesEqual;": "\u2AAF\u0338", "&NotPrecedesSlantEqual;": "\u22E0", "&NotReverseElement;": "\u220C", "&NotRightTriangle;": "\u22EB", "&NotRightTriangleBar;": "\u29D0\u0338", "&NotRightTriangleEqual;": "\u22ED", "&NotSquareSubset;": "\u228F\u0338", "&NotSquareSubsetEqual;": "\u22E2", "&NotSquareSuperset;": "\u2290\u0338", "&NotSquareSupersetEqual;": "\u22E3", "&NotSubset;": "\u2282\u20D2", "&NotSubsetEqual;": "\u2288", "&NotSucceeds;": "\u2281", "&NotSucceedsEqual;": "\u2AB0\u0338", "&NotSucceedsSlantEqual;": "\u22E1", "&NotSucceedsTilde;": "\u227F\u0338", "&NotSuperset;": "\u2283\u20D2", "&NotSupersetEqual;": "\u2289", "&NotTilde;": "\u2241", "&NotTildeEqual;": "\u2244", "&NotTildeFullEqual;": "\u2247", "&NotTildeTilde;": "\u2249", "&NotVerticalBar;": "\u2224", "&Nscr;": "\u{1D4A9}", "&Ntilde": "\xD1", "&Ntilde;": "\xD1", "&Nu;": "\u039D", "&OElig;": "\u0152", "&Oacute": "\xD3", "&Oacute;": "\xD3", "&Ocirc": "\xD4", "&Ocirc;": "\xD4", "&Ocy;": "\u041E", "&Odblac;": "\u0150", "&Ofr;": "\u{1D512}", "&Ograve": "\xD2", "&Ograve;": "\xD2", "&Omacr;": "\u014C", "&Omega;": "\u03A9", "&Omicron;": "\u039F", "&Oopf;": "\u{1D546}", "&OpenCurlyDoubleQuote;": "\u201C", "&OpenCurlyQuote;": "\u2018", "&Or;": "\u2A54", "&Oscr;": "\u{1D4AA}", "&Oslash": "\xD8", "&Oslash;": "\xD8", "&Otilde": "\xD5", "&Otilde;": "\xD5", "&Otimes;": "\u2A37", "&Ouml": "\xD6", "&Ouml;": "\xD6", "&OverBar;": "\u203E", "&OverBrace;": "\u23DE", "&OverBracket;": "\u23B4", "&OverParenthesis;": "\u23DC", "&PartialD;": "\u2202", "&Pcy;": "\u041F", "&Pfr;": "\u{1D513}", "&Phi;": "\u03A6", "&Pi;": "\u03A0", "&PlusMinus;": "\xB1", "&Poincareplane;": "\u210C", "&Popf;": "\u2119", "&Pr;": "\u2ABB", "&Precedes;": "\u227A", "&PrecedesEqual;": "\u2AAF", "&PrecedesSlantEqual;": "\u227C", "&PrecedesTilde;": "\u227E", "&Prime;": "\u2033", "&Product;": "\u220F", "&Proportion;": "\u2237", "&Proportional;": "\u221D", "&Pscr;": "\u{1D4AB}", "&Psi;": "\u03A8", "&QUOT": '"', "&QUOT;": '"', "&Qfr;": "\u{1D514}", "&Qopf;": "\u211A", "&Qscr;": "\u{1D4AC}", "&RBarr;": "\u2910", "&REG": "\xAE", "&REG;": "\xAE", "&Racute;": "\u0154", "&Rang;": "\u27EB", "&Rarr;": "\u21A0", "&Rarrtl;": "\u2916", "&Rcaron;": "\u0158", "&Rcedil;": "\u0156", "&Rcy;": "\u0420", "&Re;": "\u211C", "&ReverseElement;": "\u220B", "&ReverseEquilibrium;": "\u21CB", "&ReverseUpEquilibrium;": "\u296F", "&Rfr;": "\u211C", "&Rho;": "\u03A1", "&RightAngleBracket;": "\u27E9", "&RightArrow;": "\u2192", "&RightArrowBar;": "\u21E5", "&RightArrowLeftArrow;": "\u21C4", "&RightCeiling;": "\u2309", "&RightDoubleBracket;": "\u27E7", "&RightDownTeeVector;": "\u295D", "&RightDownVector;": "\u21C2", "&RightDownVectorBar;": "\u2955", "&RightFloor;": "\u230B", "&RightTee;": "\u22A2", "&RightTeeArrow;": "\u21A6", "&RightTeeVector;": "\u295B", "&RightTriangle;": "\u22B3", "&RightTriangleBar;": "\u29D0", "&RightTriangleEqual;": "\u22B5", "&RightUpDownVector;": "\u294F", "&RightUpTeeVector;": "\u295C", "&RightUpVector;": "\u21BE", "&RightUpVectorBar;": "\u2954", "&RightVector;": "\u21C0", "&RightVectorBar;": "\u2953", "&Rightarrow;": "\u21D2", "&Ropf;": "\u211D", "&RoundImplies;": "\u2970", "&Rrightarrow;": "\u21DB", "&Rscr;": "\u211B", "&Rsh;": "\u21B1", "&RuleDelayed;": "\u29F4", "&SHCHcy;": "\u0429", "&SHcy;": "\u0428", "&SOFTcy;": "\u042C", "&Sacute;": "\u015A", "&Sc;": "\u2ABC", "&Scaron;": "\u0160", "&Scedil;": "\u015E", "&Scirc;": "\u015C", "&Scy;": "\u0421", "&Sfr;": "\u{1D516}", "&ShortDownArrow;": "\u2193", "&ShortLeftArrow;": "\u2190", "&ShortRightArrow;": "\u2192", "&ShortUpArrow;": "\u2191", "&Sigma;": "\u03A3", "&SmallCircle;": "\u2218", "&Sopf;": "\u{1D54A}", "&Sqrt;": "\u221A", "&Square;": "\u25A1", "&SquareIntersection;": "\u2293", "&SquareSubset;": "\u228F", "&SquareSubsetEqual;": "\u2291", "&SquareSuperset;": "\u2290", "&SquareSupersetEqual;": "\u2292", "&SquareUnion;": "\u2294", "&Sscr;": "\u{1D4AE}", "&Star;": "\u22C6", "&Sub;": "\u22D0", "&Subset;": "\u22D0", "&SubsetEqual;": "\u2286", "&Succeeds;": "\u227B", "&SucceedsEqual;": "\u2AB0", "&SucceedsSlantEqual;": "\u227D", "&SucceedsTilde;": "\u227F", "&SuchThat;": "\u220B", "&Sum;": "\u2211", "&Sup;": "\u22D1", "&Superset;": "\u2283", "&SupersetEqual;": "\u2287", "&Supset;": "\u22D1", "&THORN": "\xDE", "&THORN;": "\xDE", "&TRADE;": "\u2122", "&TSHcy;": "\u040B", "&TScy;": "\u0426", "&Tab;": "	", "&Tau;": "\u03A4", "&Tcaron;": "\u0164", "&Tcedil;": "\u0162", "&Tcy;": "\u0422", "&Tfr;": "\u{1D517}", "&Therefore;": "\u2234", "&Theta;": "\u0398", "&ThickSpace;": "\u205F\u200A", "&ThinSpace;": "\u2009", "&Tilde;": "\u223C", "&TildeEqual;": "\u2243", "&TildeFullEqual;": "\u2245", "&TildeTilde;": "\u2248", "&Topf;": "\u{1D54B}", "&TripleDot;": "\u20DB", "&Tscr;": "\u{1D4AF}", "&Tstrok;": "\u0166", "&Uacute": "\xDA", "&Uacute;": "\xDA", "&Uarr;": "\u219F", "&Uarrocir;": "\u2949", "&Ubrcy;": "\u040E", "&Ubreve;": "\u016C", "&Ucirc": "\xDB", "&Ucirc;": "\xDB", "&Ucy;": "\u0423", "&Udblac;": "\u0170", "&Ufr;": "\u{1D518}", "&Ugrave": "\xD9", "&Ugrave;": "\xD9", "&Umacr;": "\u016A", "&UnderBar;": "_", "&UnderBrace;": "\u23DF", "&UnderBracket;": "\u23B5", "&UnderParenthesis;": "\u23DD", "&Union;": "\u22C3", "&UnionPlus;": "\u228E", "&Uogon;": "\u0172", "&Uopf;": "\u{1D54C}", "&UpArrow;": "\u2191", "&UpArrowBar;": "\u2912", "&UpArrowDownArrow;": "\u21C5", "&UpDownArrow;": "\u2195", "&UpEquilibrium;": "\u296E", "&UpTee;": "\u22A5", "&UpTeeArrow;": "\u21A5", "&Uparrow;": "\u21D1", "&Updownarrow;": "\u21D5", "&UpperLeftArrow;": "\u2196", "&UpperRightArrow;": "\u2197", "&Upsi;": "\u03D2", "&Upsilon;": "\u03A5", "&Uring;": "\u016E", "&Uscr;": "\u{1D4B0}", "&Utilde;": "\u0168", "&Uuml": "\xDC", "&Uuml;": "\xDC", "&VDash;": "\u22AB", "&Vbar;": "\u2AEB", "&Vcy;": "\u0412", "&Vdash;": "\u22A9", "&Vdashl;": "\u2AE6", "&Vee;": "\u22C1", "&Verbar;": "\u2016", "&Vert;": "\u2016", "&VerticalBar;": "\u2223", "&VerticalLine;": "|", "&VerticalSeparator;": "\u2758", "&VerticalTilde;": "\u2240", "&VeryThinSpace;": "\u200A", "&Vfr;": "\u{1D519}", "&Vopf;": "\u{1D54D}", "&Vscr;": "\u{1D4B1}", "&Vvdash;": "\u22AA", "&Wcirc;": "\u0174", "&Wedge;": "\u22C0", "&Wfr;": "\u{1D51A}", "&Wopf;": "\u{1D54E}", "&Wscr;": "\u{1D4B2}", "&Xfr;": "\u{1D51B}", "&Xi;": "\u039E", "&Xopf;": "\u{1D54F}", "&Xscr;": "\u{1D4B3}", "&YAcy;": "\u042F", "&YIcy;": "\u0407", "&YUcy;": "\u042E", "&Yacute": "\xDD", "&Yacute;": "\xDD", "&Ycirc;": "\u0176", "&Ycy;": "\u042B", "&Yfr;": "\u{1D51C}", "&Yopf;": "\u{1D550}", "&Yscr;": "\u{1D4B4}", "&Yuml;": "\u0178", "&ZHcy;": "\u0416", "&Zacute;": "\u0179", "&Zcaron;": "\u017D", "&Zcy;": "\u0417", "&Zdot;": "\u017B", "&ZeroWidthSpace;": "\u200B", "&Zeta;": "\u0396", "&Zfr;": "\u2128", "&Zopf;": "\u2124", "&Zscr;": "\u{1D4B5}", "&aacute": "\xE1", "&aacute;": "\xE1", "&abreve;": "\u0103", "&ac;": "\u223E", "&acE;": "\u223E\u0333", "&acd;": "\u223F", "&acirc": "\xE2", "&acirc;": "\xE2", "&acute": "\xB4", "&acute;": "\xB4", "&acy;": "\u0430", "&aelig": "\xE6", "&aelig;": "\xE6", "&af;": "\u2061", "&afr;": "\u{1D51E}", "&agrave": "\xE0", "&agrave;": "\xE0", "&alefsym;": "\u2135", "&aleph;": "\u2135", "&alpha;": "\u03B1", "&amacr;": "\u0101", "&amalg;": "\u2A3F", "&amp": "&", "&amp;": "&", "&and;": "\u2227", "&andand;": "\u2A55", "&andd;": "\u2A5C", "&andslope;": "\u2A58", "&andv;": "\u2A5A", "&ang;": "\u2220", "&ange;": "\u29A4", "&angle;": "\u2220", "&angmsd;": "\u2221", "&angmsdaa;": "\u29A8", "&angmsdab;": "\u29A9", "&angmsdac;": "\u29AA", "&angmsdad;": "\u29AB", "&angmsdae;": "\u29AC", "&angmsdaf;": "\u29AD", "&angmsdag;": "\u29AE", "&angmsdah;": "\u29AF", "&angrt;": "\u221F", "&angrtvb;": "\u22BE", "&angrtvbd;": "\u299D", "&angsph;": "\u2222", "&angst;": "\xC5", "&angzarr;": "\u237C", "&aogon;": "\u0105", "&aopf;": "\u{1D552}", "&ap;": "\u2248", "&apE;": "\u2A70", "&apacir;": "\u2A6F", "&ape;": "\u224A", "&apid;": "\u224B", "&apos;": "'", "&approx;": "\u2248", "&approxeq;": "\u224A", "&aring": "\xE5", "&aring;": "\xE5", "&ascr;": "\u{1D4B6}", "&ast;": "*", "&asymp;": "\u2248", "&asympeq;": "\u224D", "&atilde": "\xE3", "&atilde;": "\xE3", "&auml": "\xE4", "&auml;": "\xE4", "&awconint;": "\u2233", "&awint;": "\u2A11", "&bNot;": "\u2AED", "&backcong;": "\u224C", "&backepsilon;": "\u03F6", "&backprime;": "\u2035", "&backsim;": "\u223D", "&backsimeq;": "\u22CD", "&barvee;": "\u22BD", "&barwed;": "\u2305", "&barwedge;": "\u2305", "&bbrk;": "\u23B5", "&bbrktbrk;": "\u23B6", "&bcong;": "\u224C", "&bcy;": "\u0431", "&bdquo;": "\u201E", "&becaus;": "\u2235", "&because;": "\u2235", "&bemptyv;": "\u29B0", "&bepsi;": "\u03F6", "&bernou;": "\u212C", "&beta;": "\u03B2", "&beth;": "\u2136", "&between;": "\u226C", "&bfr;": "\u{1D51F}", "&bigcap;": "\u22C2", "&bigcirc;": "\u25EF", "&bigcup;": "\u22C3", "&bigodot;": "\u2A00", "&bigoplus;": "\u2A01", "&bigotimes;": "\u2A02", "&bigsqcup;": "\u2A06", "&bigstar;": "\u2605", "&bigtriangledown;": "\u25BD", "&bigtriangleup;": "\u25B3", "&biguplus;": "\u2A04", "&bigvee;": "\u22C1", "&bigwedge;": "\u22C0", "&bkarow;": "\u290D", "&blacklozenge;": "\u29EB", "&blacksquare;": "\u25AA", "&blacktriangle;": "\u25B4", "&blacktriangledown;": "\u25BE", "&blacktriangleleft;": "\u25C2", "&blacktriangleright;": "\u25B8", "&blank;": "\u2423", "&blk12;": "\u2592", "&blk14;": "\u2591", "&blk34;": "\u2593", "&block;": "\u2588", "&bne;": "=\u20E5", "&bnequiv;": "\u2261\u20E5", "&bnot;": "\u2310", "&bopf;": "\u{1D553}", "&bot;": "\u22A5", "&bottom;": "\u22A5", "&bowtie;": "\u22C8", "&boxDL;": "\u2557", "&boxDR;": "\u2554", "&boxDl;": "\u2556", "&boxDr;": "\u2553", "&boxH;": "\u2550", "&boxHD;": "\u2566", "&boxHU;": "\u2569", "&boxHd;": "\u2564", "&boxHu;": "\u2567", "&boxUL;": "\u255D", "&boxUR;": "\u255A", "&boxUl;": "\u255C", "&boxUr;": "\u2559", "&boxV;": "\u2551", "&boxVH;": "\u256C", "&boxVL;": "\u2563", "&boxVR;": "\u2560", "&boxVh;": "\u256B", "&boxVl;": "\u2562", "&boxVr;": "\u255F", "&boxbox;": "\u29C9", "&boxdL;": "\u2555", "&boxdR;": "\u2552", "&boxdl;": "\u2510", "&boxdr;": "\u250C", "&boxh;": "\u2500", "&boxhD;": "\u2565", "&boxhU;": "\u2568", "&boxhd;": "\u252C", "&boxhu;": "\u2534", "&boxminus;": "\u229F", "&boxplus;": "\u229E", "&boxtimes;": "\u22A0", "&boxuL;": "\u255B", "&boxuR;": "\u2558", "&boxul;": "\u2518", "&boxur;": "\u2514", "&boxv;": "\u2502", "&boxvH;": "\u256A", "&boxvL;": "\u2561", "&boxvR;": "\u255E", "&boxvh;": "\u253C", "&boxvl;": "\u2524", "&boxvr;": "\u251C", "&bprime;": "\u2035", "&breve;": "\u02D8", "&brvbar": "\xA6", "&brvbar;": "\xA6", "&bscr;": "\u{1D4B7}", "&bsemi;": "\u204F", "&bsim;": "\u223D", "&bsime;": "\u22CD", "&bsol;": "\\", "&bsolb;": "\u29C5", "&bsolhsub;": "\u27C8", "&bull;": "\u2022", "&bullet;": "\u2022", "&bump;": "\u224E", "&bumpE;": "\u2AAE", "&bumpe;": "\u224F", "&bumpeq;": "\u224F", "&cacute;": "\u0107", "&cap;": "\u2229", "&capand;": "\u2A44", "&capbrcup;": "\u2A49", "&capcap;": "\u2A4B", "&capcup;": "\u2A47", "&capdot;": "\u2A40", "&caps;": "\u2229\uFE00", "&caret;": "\u2041", "&caron;": "\u02C7", "&ccaps;": "\u2A4D", "&ccaron;": "\u010D", "&ccedil": "\xE7", "&ccedil;": "\xE7", "&ccirc;": "\u0109", "&ccups;": "\u2A4C", "&ccupssm;": "\u2A50", "&cdot;": "\u010B", "&cedil": "\xB8", "&cedil;": "\xB8", "&cemptyv;": "\u29B2", "&cent": "\xA2", "&cent;": "\xA2", "&centerdot;": "\xB7", "&cfr;": "\u{1D520}", "&chcy;": "\u0447", "&check;": "\u2713", "&checkmark;": "\u2713", "&chi;": "\u03C7", "&cir;": "\u25CB", "&cirE;": "\u29C3", "&circ;": "\u02C6", "&circeq;": "\u2257", "&circlearrowleft;": "\u21BA", "&circlearrowright;": "\u21BB", "&circledR;": "\xAE", "&circledS;": "\u24C8", "&circledast;": "\u229B", "&circledcirc;": "\u229A", "&circleddash;": "\u229D", "&cire;": "\u2257", "&cirfnint;": "\u2A10", "&cirmid;": "\u2AEF", "&cirscir;": "\u29C2", "&clubs;": "\u2663", "&clubsuit;": "\u2663", "&colon;": ":", "&colone;": "\u2254", "&coloneq;": "\u2254", "&comma;": ",", "&commat;": "@", "&comp;": "\u2201", "&compfn;": "\u2218", "&complement;": "\u2201", "&complexes;": "\u2102", "&cong;": "\u2245", "&congdot;": "\u2A6D", "&conint;": "\u222E", "&copf;": "\u{1D554}", "&coprod;": "\u2210", "&copy": "\xA9", "&copy;": "\xA9", "&copysr;": "\u2117", "&crarr;": "\u21B5", "&cross;": "\u2717", "&cscr;": "\u{1D4B8}", "&csub;": "\u2ACF", "&csube;": "\u2AD1", "&csup;": "\u2AD0", "&csupe;": "\u2AD2", "&ctdot;": "\u22EF", "&cudarrl;": "\u2938", "&cudarrr;": "\u2935", "&cuepr;": "\u22DE", "&cuesc;": "\u22DF", "&cularr;": "\u21B6", "&cularrp;": "\u293D", "&cup;": "\u222A", "&cupbrcap;": "\u2A48", "&cupcap;": "\u2A46", "&cupcup;": "\u2A4A", "&cupdot;": "\u228D", "&cupor;": "\u2A45", "&cups;": "\u222A\uFE00", "&curarr;": "\u21B7", "&curarrm;": "\u293C", "&curlyeqprec;": "\u22DE", "&curlyeqsucc;": "\u22DF", "&curlyvee;": "\u22CE", "&curlywedge;": "\u22CF", "&curren": "\xA4", "&curren;": "\xA4", "&curvearrowleft;": "\u21B6", "&curvearrowright;": "\u21B7", "&cuvee;": "\u22CE", "&cuwed;": "\u22CF", "&cwconint;": "\u2232", "&cwint;": "\u2231", "&cylcty;": "\u232D", "&dArr;": "\u21D3", "&dHar;": "\u2965", "&dagger;": "\u2020", "&daleth;": "\u2138", "&darr;": "\u2193", "&dash;": "\u2010", "&dashv;": "\u22A3", "&dbkarow;": "\u290F", "&dblac;": "\u02DD", "&dcaron;": "\u010F", "&dcy;": "\u0434", "&dd;": "\u2146", "&ddagger;": "\u2021", "&ddarr;": "\u21CA", "&ddotseq;": "\u2A77", "&deg": "\xB0", "&deg;": "\xB0", "&delta;": "\u03B4", "&demptyv;": "\u29B1", "&dfisht;": "\u297F", "&dfr;": "\u{1D521}", "&dharl;": "\u21C3", "&dharr;": "\u21C2", "&diam;": "\u22C4", "&diamond;": "\u22C4", "&diamondsuit;": "\u2666", "&diams;": "\u2666", "&die;": "\xA8", "&digamma;": "\u03DD", "&disin;": "\u22F2", "&div;": "\xF7", "&divide": "\xF7", "&divide;": "\xF7", "&divideontimes;": "\u22C7", "&divonx;": "\u22C7", "&djcy;": "\u0452", "&dlcorn;": "\u231E", "&dlcrop;": "\u230D", "&dollar;": "$", "&dopf;": "\u{1D555}", "&dot;": "\u02D9", "&doteq;": "\u2250", "&doteqdot;": "\u2251", "&dotminus;": "\u2238", "&dotplus;": "\u2214", "&dotsquare;": "\u22A1", "&doublebarwedge;": "\u2306", "&downarrow;": "\u2193", "&downdownarrows;": "\u21CA", "&downharpoonleft;": "\u21C3", "&downharpoonright;": "\u21C2", "&drbkarow;": "\u2910", "&drcorn;": "\u231F", "&drcrop;": "\u230C", "&dscr;": "\u{1D4B9}", "&dscy;": "\u0455", "&dsol;": "\u29F6", "&dstrok;": "\u0111", "&dtdot;": "\u22F1", "&dtri;": "\u25BF", "&dtrif;": "\u25BE", "&duarr;": "\u21F5", "&duhar;": "\u296F", "&dwangle;": "\u29A6", "&dzcy;": "\u045F", "&dzigrarr;": "\u27FF", "&eDDot;": "\u2A77", "&eDot;": "\u2251", "&eacute": "\xE9", "&eacute;": "\xE9", "&easter;": "\u2A6E", "&ecaron;": "\u011B", "&ecir;": "\u2256", "&ecirc": "\xEA", "&ecirc;": "\xEA", "&ecolon;": "\u2255", "&ecy;": "\u044D", "&edot;": "\u0117", "&ee;": "\u2147", "&efDot;": "\u2252", "&efr;": "\u{1D522}", "&eg;": "\u2A9A", "&egrave": "\xE8", "&egrave;": "\xE8", "&egs;": "\u2A96", "&egsdot;": "\u2A98", "&el;": "\u2A99", "&elinters;": "\u23E7", "&ell;": "\u2113", "&els;": "\u2A95", "&elsdot;": "\u2A97", "&emacr;": "\u0113", "&empty;": "\u2205", "&emptyset;": "\u2205", "&emptyv;": "\u2205", "&emsp13;": "\u2004", "&emsp14;": "\u2005", "&emsp;": "\u2003", "&eng;": "\u014B", "&ensp;": "\u2002", "&eogon;": "\u0119", "&eopf;": "\u{1D556}", "&epar;": "\u22D5", "&eparsl;": "\u29E3", "&eplus;": "\u2A71", "&epsi;": "\u03B5", "&epsilon;": "\u03B5", "&epsiv;": "\u03F5", "&eqcirc;": "\u2256", "&eqcolon;": "\u2255", "&eqsim;": "\u2242", "&eqslantgtr;": "\u2A96", "&eqslantless;": "\u2A95", "&equals;": "=", "&equest;": "\u225F", "&equiv;": "\u2261", "&equivDD;": "\u2A78", "&eqvparsl;": "\u29E5", "&erDot;": "\u2253", "&erarr;": "\u2971", "&escr;": "\u212F", "&esdot;": "\u2250", "&esim;": "\u2242", "&eta;": "\u03B7", "&eth": "\xF0", "&eth;": "\xF0", "&euml": "\xEB", "&euml;": "\xEB", "&euro;": "\u20AC", "&excl;": "!", "&exist;": "\u2203", "&expectation;": "\u2130", "&exponentiale;": "\u2147", "&fallingdotseq;": "\u2252", "&fcy;": "\u0444", "&female;": "\u2640", "&ffilig;": "\uFB03", "&fflig;": "\uFB00", "&ffllig;": "\uFB04", "&ffr;": "\u{1D523}", "&filig;": "\uFB01", "&fjlig;": "fj", "&flat;": "\u266D", "&fllig;": "\uFB02", "&fltns;": "\u25B1", "&fnof;": "\u0192", "&fopf;": "\u{1D557}", "&forall;": "\u2200", "&fork;": "\u22D4", "&forkv;": "\u2AD9", "&fpartint;": "\u2A0D", "&frac12": "\xBD", "&frac12;": "\xBD", "&frac13;": "\u2153", "&frac14": "\xBC", "&frac14;": "\xBC", "&frac15;": "\u2155", "&frac16;": "\u2159", "&frac18;": "\u215B", "&frac23;": "\u2154", "&frac25;": "\u2156", "&frac34": "\xBE", "&frac34;": "\xBE", "&frac35;": "\u2157", "&frac38;": "\u215C", "&frac45;": "\u2158", "&frac56;": "\u215A", "&frac58;": "\u215D", "&frac78;": "\u215E", "&frasl;": "\u2044", "&frown;": "\u2322", "&fscr;": "\u{1D4BB}", "&gE;": "\u2267", "&gEl;": "\u2A8C", "&gacute;": "\u01F5", "&gamma;": "\u03B3", "&gammad;": "\u03DD", "&gap;": "\u2A86", "&gbreve;": "\u011F", "&gcirc;": "\u011D", "&gcy;": "\u0433", "&gdot;": "\u0121", "&ge;": "\u2265", "&gel;": "\u22DB", "&geq;": "\u2265", "&geqq;": "\u2267", "&geqslant;": "\u2A7E", "&ges;": "\u2A7E", "&gescc;": "\u2AA9", "&gesdot;": "\u2A80", "&gesdoto;": "\u2A82", "&gesdotol;": "\u2A84", "&gesl;": "\u22DB\uFE00", "&gesles;": "\u2A94", "&gfr;": "\u{1D524}", "&gg;": "\u226B", "&ggg;": "\u22D9", "&gimel;": "\u2137", "&gjcy;": "\u0453", "&gl;": "\u2277", "&glE;": "\u2A92", "&gla;": "\u2AA5", "&glj;": "\u2AA4", "&gnE;": "\u2269", "&gnap;": "\u2A8A", "&gnapprox;": "\u2A8A", "&gne;": "\u2A88", "&gneq;": "\u2A88", "&gneqq;": "\u2269", "&gnsim;": "\u22E7", "&gopf;": "\u{1D558}", "&grave;": "`", "&gscr;": "\u210A", "&gsim;": "\u2273", "&gsime;": "\u2A8E", "&gsiml;": "\u2A90", "&gt": ">", "&gt;": ">", "&gtcc;": "\u2AA7", "&gtcir;": "\u2A7A", "&gtdot;": "\u22D7", "&gtlPar;": "\u2995", "&gtquest;": "\u2A7C", "&gtrapprox;": "\u2A86", "&gtrarr;": "\u2978", "&gtrdot;": "\u22D7", "&gtreqless;": "\u22DB", "&gtreqqless;": "\u2A8C", "&gtrless;": "\u2277", "&gtrsim;": "\u2273", "&gvertneqq;": "\u2269\uFE00", "&gvnE;": "\u2269\uFE00", "&hArr;": "\u21D4", "&hairsp;": "\u200A", "&half;": "\xBD", "&hamilt;": "\u210B", "&hardcy;": "\u044A", "&harr;": "\u2194", "&harrcir;": "\u2948", "&harrw;": "\u21AD", "&hbar;": "\u210F", "&hcirc;": "\u0125", "&hearts;": "\u2665", "&heartsuit;": "\u2665", "&hellip;": "\u2026", "&hercon;": "\u22B9", "&hfr;": "\u{1D525}", "&hksearow;": "\u2925", "&hkswarow;": "\u2926", "&hoarr;": "\u21FF", "&homtht;": "\u223B", "&hookleftarrow;": "\u21A9", "&hookrightarrow;": "\u21AA", "&hopf;": "\u{1D559}", "&horbar;": "\u2015", "&hscr;": "\u{1D4BD}", "&hslash;": "\u210F", "&hstrok;": "\u0127", "&hybull;": "\u2043", "&hyphen;": "\u2010", "&iacute": "\xED", "&iacute;": "\xED", "&ic;": "\u2063", "&icirc": "\xEE", "&icirc;": "\xEE", "&icy;": "\u0438", "&iecy;": "\u0435", "&iexcl": "\xA1", "&iexcl;": "\xA1", "&iff;": "\u21D4", "&ifr;": "\u{1D526}", "&igrave": "\xEC", "&igrave;": "\xEC", "&ii;": "\u2148", "&iiiint;": "\u2A0C", "&iiint;": "\u222D", "&iinfin;": "\u29DC", "&iiota;": "\u2129", "&ijlig;": "\u0133", "&imacr;": "\u012B", "&image;": "\u2111", "&imagline;": "\u2110", "&imagpart;": "\u2111", "&imath;": "\u0131", "&imof;": "\u22B7", "&imped;": "\u01B5", "&in;": "\u2208", "&incare;": "\u2105", "&infin;": "\u221E", "&infintie;": "\u29DD", "&inodot;": "\u0131", "&int;": "\u222B", "&intcal;": "\u22BA", "&integers;": "\u2124", "&intercal;": "\u22BA", "&intlarhk;": "\u2A17", "&intprod;": "\u2A3C", "&iocy;": "\u0451", "&iogon;": "\u012F", "&iopf;": "\u{1D55A}", "&iota;": "\u03B9", "&iprod;": "\u2A3C", "&iquest": "\xBF", "&iquest;": "\xBF", "&iscr;": "\u{1D4BE}", "&isin;": "\u2208", "&isinE;": "\u22F9", "&isindot;": "\u22F5", "&isins;": "\u22F4", "&isinsv;": "\u22F3", "&isinv;": "\u2208", "&it;": "\u2062", "&itilde;": "\u0129", "&iukcy;": "\u0456", "&iuml": "\xEF", "&iuml;": "\xEF", "&jcirc;": "\u0135", "&jcy;": "\u0439", "&jfr;": "\u{1D527}", "&jmath;": "\u0237", "&jopf;": "\u{1D55B}", "&jscr;": "\u{1D4BF}", "&jsercy;": "\u0458", "&jukcy;": "\u0454", "&kappa;": "\u03BA", "&kappav;": "\u03F0", "&kcedil;": "\u0137", "&kcy;": "\u043A", "&kfr;": "\u{1D528}", "&kgreen;": "\u0138", "&khcy;": "\u0445", "&kjcy;": "\u045C", "&kopf;": "\u{1D55C}", "&kscr;": "\u{1D4C0}", "&lAarr;": "\u21DA", "&lArr;": "\u21D0", "&lAtail;": "\u291B", "&lBarr;": "\u290E", "&lE;": "\u2266", "&lEg;": "\u2A8B", "&lHar;": "\u2962", "&lacute;": "\u013A", "&laemptyv;": "\u29B4", "&lagran;": "\u2112", "&lambda;": "\u03BB", "&lang;": "\u27E8", "&langd;": "\u2991", "&langle;": "\u27E8", "&lap;": "\u2A85", "&laquo": "\xAB", "&laquo;": "\xAB", "&larr;": "\u2190", "&larrb;": "\u21E4", "&larrbfs;": "\u291F", "&larrfs;": "\u291D", "&larrhk;": "\u21A9", "&larrlp;": "\u21AB", "&larrpl;": "\u2939", "&larrsim;": "\u2973", "&larrtl;": "\u21A2", "&lat;": "\u2AAB", "&latail;": "\u2919", "&late;": "\u2AAD", "&lates;": "\u2AAD\uFE00", "&lbarr;": "\u290C", "&lbbrk;": "\u2772", "&lbrace;": "{", "&lbrack;": "[", "&lbrke;": "\u298B", "&lbrksld;": "\u298F", "&lbrkslu;": "\u298D", "&lcaron;": "\u013E", "&lcedil;": "\u013C", "&lceil;": "\u2308", "&lcub;": "{", "&lcy;": "\u043B", "&ldca;": "\u2936", "&ldquo;": "\u201C", "&ldquor;": "\u201E", "&ldrdhar;": "\u2967", "&ldrushar;": "\u294B", "&ldsh;": "\u21B2", "&le;": "\u2264", "&leftarrow;": "\u2190", "&leftarrowtail;": "\u21A2", "&leftharpoondown;": "\u21BD", "&leftharpoonup;": "\u21BC", "&leftleftarrows;": "\u21C7", "&leftrightarrow;": "\u2194", "&leftrightarrows;": "\u21C6", "&leftrightharpoons;": "\u21CB", "&leftrightsquigarrow;": "\u21AD", "&leftthreetimes;": "\u22CB", "&leg;": "\u22DA", "&leq;": "\u2264", "&leqq;": "\u2266", "&leqslant;": "\u2A7D", "&les;": "\u2A7D", "&lescc;": "\u2AA8", "&lesdot;": "\u2A7F", "&lesdoto;": "\u2A81", "&lesdotor;": "\u2A83", "&lesg;": "\u22DA\uFE00", "&lesges;": "\u2A93", "&lessapprox;": "\u2A85", "&lessdot;": "\u22D6", "&lesseqgtr;": "\u22DA", "&lesseqqgtr;": "\u2A8B", "&lessgtr;": "\u2276", "&lesssim;": "\u2272", "&lfisht;": "\u297C", "&lfloor;": "\u230A", "&lfr;": "\u{1D529}", "&lg;": "\u2276", "&lgE;": "\u2A91", "&lhard;": "\u21BD", "&lharu;": "\u21BC", "&lharul;": "\u296A", "&lhblk;": "\u2584", "&ljcy;": "\u0459", "&ll;": "\u226A", "&llarr;": "\u21C7", "&llcorner;": "\u231E", "&llhard;": "\u296B", "&lltri;": "\u25FA", "&lmidot;": "\u0140", "&lmoust;": "\u23B0", "&lmoustache;": "\u23B0", "&lnE;": "\u2268", "&lnap;": "\u2A89", "&lnapprox;": "\u2A89", "&lne;": "\u2A87", "&lneq;": "\u2A87", "&lneqq;": "\u2268", "&lnsim;": "\u22E6", "&loang;": "\u27EC", "&loarr;": "\u21FD", "&lobrk;": "\u27E6", "&longleftarrow;": "\u27F5", "&longleftrightarrow;": "\u27F7", "&longmapsto;": "\u27FC", "&longrightarrow;": "\u27F6", "&looparrowleft;": "\u21AB", "&looparrowright;": "\u21AC", "&lopar;": "\u2985", "&lopf;": "\u{1D55D}", "&loplus;": "\u2A2D", "&lotimes;": "\u2A34", "&lowast;": "\u2217", "&lowbar;": "_", "&loz;": "\u25CA", "&lozenge;": "\u25CA", "&lozf;": "\u29EB", "&lpar;": "(", "&lparlt;": "\u2993", "&lrarr;": "\u21C6", "&lrcorner;": "\u231F", "&lrhar;": "\u21CB", "&lrhard;": "\u296D", "&lrm;": "\u200E", "&lrtri;": "\u22BF", "&lsaquo;": "\u2039", "&lscr;": "\u{1D4C1}", "&lsh;": "\u21B0", "&lsim;": "\u2272", "&lsime;": "\u2A8D", "&lsimg;": "\u2A8F", "&lsqb;": "[", "&lsquo;": "\u2018", "&lsquor;": "\u201A", "&lstrok;": "\u0142", "&lt": "<", "&lt;": "<", "&ltcc;": "\u2AA6", "&ltcir;": "\u2A79", "&ltdot;": "\u22D6", "&lthree;": "\u22CB", "&ltimes;": "\u22C9", "&ltlarr;": "\u2976", "&ltquest;": "\u2A7B", "&ltrPar;": "\u2996", "&ltri;": "\u25C3", "&ltrie;": "\u22B4", "&ltrif;": "\u25C2", "&lurdshar;": "\u294A", "&luruhar;": "\u2966", "&lvertneqq;": "\u2268\uFE00", "&lvnE;": "\u2268\uFE00", "&mDDot;": "\u223A", "&macr": "\xAF", "&macr;": "\xAF", "&male;": "\u2642", "&malt;": "\u2720", "&maltese;": "\u2720", "&map;": "\u21A6", "&mapsto;": "\u21A6", "&mapstodown;": "\u21A7", "&mapstoleft;": "\u21A4", "&mapstoup;": "\u21A5", "&marker;": "\u25AE", "&mcomma;": "\u2A29", "&mcy;": "\u043C", "&mdash;": "\u2014", "&measuredangle;": "\u2221", "&mfr;": "\u{1D52A}", "&mho;": "\u2127", "&micro": "\xB5", "&micro;": "\xB5", "&mid;": "\u2223", "&midast;": "*", "&midcir;": "\u2AF0", "&middot": "\xB7", "&middot;": "\xB7", "&minus;": "\u2212", "&minusb;": "\u229F", "&minusd;": "\u2238", "&minusdu;": "\u2A2A", "&mlcp;": "\u2ADB", "&mldr;": "\u2026", "&mnplus;": "\u2213", "&models;": "\u22A7", "&mopf;": "\u{1D55E}", "&mp;": "\u2213", "&mscr;": "\u{1D4C2}", "&mstpos;": "\u223E", "&mu;": "\u03BC", "&multimap;": "\u22B8", "&mumap;": "\u22B8", "&nGg;": "\u22D9\u0338", "&nGt;": "\u226B\u20D2", "&nGtv;": "\u226B\u0338", "&nLeftarrow;": "\u21CD", "&nLeftrightarrow;": "\u21CE", "&nLl;": "\u22D8\u0338", "&nLt;": "\u226A\u20D2", "&nLtv;": "\u226A\u0338", "&nRightarrow;": "\u21CF", "&nVDash;": "\u22AF", "&nVdash;": "\u22AE", "&nabla;": "\u2207", "&nacute;": "\u0144", "&nang;": "\u2220\u20D2", "&nap;": "\u2249", "&napE;": "\u2A70\u0338", "&napid;": "\u224B\u0338", "&napos;": "\u0149", "&napprox;": "\u2249", "&natur;": "\u266E", "&natural;": "\u266E", "&naturals;": "\u2115", "&nbsp": "\xA0", "&nbsp;": "\xA0", "&nbump;": "\u224E\u0338", "&nbumpe;": "\u224F\u0338", "&ncap;": "\u2A43", "&ncaron;": "\u0148", "&ncedil;": "\u0146", "&ncong;": "\u2247", "&ncongdot;": "\u2A6D\u0338", "&ncup;": "\u2A42", "&ncy;": "\u043D", "&ndash;": "\u2013", "&ne;": "\u2260", "&neArr;": "\u21D7", "&nearhk;": "\u2924", "&nearr;": "\u2197", "&nearrow;": "\u2197", "&nedot;": "\u2250\u0338", "&nequiv;": "\u2262", "&nesear;": "\u2928", "&nesim;": "\u2242\u0338", "&nexist;": "\u2204", "&nexists;": "\u2204", "&nfr;": "\u{1D52B}", "&ngE;": "\u2267\u0338", "&nge;": "\u2271", "&ngeq;": "\u2271", "&ngeqq;": "\u2267\u0338", "&ngeqslant;": "\u2A7E\u0338", "&nges;": "\u2A7E\u0338", "&ngsim;": "\u2275", "&ngt;": "\u226F", "&ngtr;": "\u226F", "&nhArr;": "\u21CE", "&nharr;": "\u21AE", "&nhpar;": "\u2AF2", "&ni;": "\u220B", "&nis;": "\u22FC", "&nisd;": "\u22FA", "&niv;": "\u220B", "&njcy;": "\u045A", "&nlArr;": "\u21CD", "&nlE;": "\u2266\u0338", "&nlarr;": "\u219A", "&nldr;": "\u2025", "&nle;": "\u2270", "&nleftarrow;": "\u219A", "&nleftrightarrow;": "\u21AE", "&nleq;": "\u2270", "&nleqq;": "\u2266\u0338", "&nleqslant;": "\u2A7D\u0338", "&nles;": "\u2A7D\u0338", "&nless;": "\u226E", "&nlsim;": "\u2274", "&nlt;": "\u226E", "&nltri;": "\u22EA", "&nltrie;": "\u22EC", "&nmid;": "\u2224", "&nopf;": "\u{1D55F}", "&not": "\xAC", "&not;": "\xAC", "&notin;": "\u2209", "&notinE;": "\u22F9\u0338", "&notindot;": "\u22F5\u0338", "&notinva;": "\u2209", "&notinvb;": "\u22F7", "&notinvc;": "\u22F6", "&notni;": "\u220C", "&notniva;": "\u220C", "&notnivb;": "\u22FE", "&notnivc;": "\u22FD", "&npar;": "\u2226", "&nparallel;": "\u2226", "&nparsl;": "\u2AFD\u20E5", "&npart;": "\u2202\u0338", "&npolint;": "\u2A14", "&npr;": "\u2280", "&nprcue;": "\u22E0", "&npre;": "\u2AAF\u0338", "&nprec;": "\u2280", "&npreceq;": "\u2AAF\u0338", "&nrArr;": "\u21CF", "&nrarr;": "\u219B", "&nrarrc;": "\u2933\u0338", "&nrarrw;": "\u219D\u0338", "&nrightarrow;": "\u219B", "&nrtri;": "\u22EB", "&nrtrie;": "\u22ED", "&nsc;": "\u2281", "&nsccue;": "\u22E1", "&nsce;": "\u2AB0\u0338", "&nscr;": "\u{1D4C3}", "&nshortmid;": "\u2224", "&nshortparallel;": "\u2226", "&nsim;": "\u2241", "&nsime;": "\u2244", "&nsimeq;": "\u2244", "&nsmid;": "\u2224", "&nspar;": "\u2226", "&nsqsube;": "\u22E2", "&nsqsupe;": "\u22E3", "&nsub;": "\u2284", "&nsubE;": "\u2AC5\u0338", "&nsube;": "\u2288", "&nsubset;": "\u2282\u20D2", "&nsubseteq;": "\u2288", "&nsubseteqq;": "\u2AC5\u0338", "&nsucc;": "\u2281", "&nsucceq;": "\u2AB0\u0338", "&nsup;": "\u2285", "&nsupE;": "\u2AC6\u0338", "&nsupe;": "\u2289", "&nsupset;": "\u2283\u20D2", "&nsupseteq;": "\u2289", "&nsupseteqq;": "\u2AC6\u0338", "&ntgl;": "\u2279", "&ntilde": "\xF1", "&ntilde;": "\xF1", "&ntlg;": "\u2278", "&ntriangleleft;": "\u22EA", "&ntrianglelefteq;": "\u22EC", "&ntriangleright;": "\u22EB", "&ntrianglerighteq;": "\u22ED", "&nu;": "\u03BD", "&num;": "#", "&numero;": "\u2116", "&numsp;": "\u2007", "&nvDash;": "\u22AD", "&nvHarr;": "\u2904", "&nvap;": "\u224D\u20D2", "&nvdash;": "\u22AC", "&nvge;": "\u2265\u20D2", "&nvgt;": ">\u20D2", "&nvinfin;": "\u29DE", "&nvlArr;": "\u2902", "&nvle;": "\u2264\u20D2", "&nvlt;": "<\u20D2", "&nvltrie;": "\u22B4\u20D2", "&nvrArr;": "\u2903", "&nvrtrie;": "\u22B5\u20D2", "&nvsim;": "\u223C\u20D2", "&nwArr;": "\u21D6", "&nwarhk;": "\u2923", "&nwarr;": "\u2196", "&nwarrow;": "\u2196", "&nwnear;": "\u2927", "&oS;": "\u24C8", "&oacute": "\xF3", "&oacute;": "\xF3", "&oast;": "\u229B", "&ocir;": "\u229A", "&ocirc": "\xF4", "&ocirc;": "\xF4", "&ocy;": "\u043E", "&odash;": "\u229D", "&odblac;": "\u0151", "&odiv;": "\u2A38", "&odot;": "\u2299", "&odsold;": "\u29BC", "&oelig;": "\u0153", "&ofcir;": "\u29BF", "&ofr;": "\u{1D52C}", "&ogon;": "\u02DB", "&ograve": "\xF2", "&ograve;": "\xF2", "&ogt;": "\u29C1", "&ohbar;": "\u29B5", "&ohm;": "\u03A9", "&oint;": "\u222E", "&olarr;": "\u21BA", "&olcir;": "\u29BE", "&olcross;": "\u29BB", "&oline;": "\u203E", "&olt;": "\u29C0", "&omacr;": "\u014D", "&omega;": "\u03C9", "&omicron;": "\u03BF", "&omid;": "\u29B6", "&ominus;": "\u2296", "&oopf;": "\u{1D560}", "&opar;": "\u29B7", "&operp;": "\u29B9", "&oplus;": "\u2295", "&or;": "\u2228", "&orarr;": "\u21BB", "&ord;": "\u2A5D", "&order;": "\u2134", "&orderof;": "\u2134", "&ordf": "\xAA", "&ordf;": "\xAA", "&ordm": "\xBA", "&ordm;": "\xBA", "&origof;": "\u22B6", "&oror;": "\u2A56", "&orslope;": "\u2A57", "&orv;": "\u2A5B", "&oscr;": "\u2134", "&oslash": "\xF8", "&oslash;": "\xF8", "&osol;": "\u2298", "&otilde": "\xF5", "&otilde;": "\xF5", "&otimes;": "\u2297", "&otimesas;": "\u2A36", "&ouml": "\xF6", "&ouml;": "\xF6", "&ovbar;": "\u233D", "&par;": "\u2225", "&para": "\xB6", "&para;": "\xB6", "&parallel;": "\u2225", "&parsim;": "\u2AF3", "&parsl;": "\u2AFD", "&part;": "\u2202", "&pcy;": "\u043F", "&percnt;": "%", "&period;": ".", "&permil;": "\u2030", "&perp;": "\u22A5", "&pertenk;": "\u2031", "&pfr;": "\u{1D52D}", "&phi;": "\u03C6", "&phiv;": "\u03D5", "&phmmat;": "\u2133", "&phone;": "\u260E", "&pi;": "\u03C0", "&pitchfork;": "\u22D4", "&piv;": "\u03D6", "&planck;": "\u210F", "&planckh;": "\u210E", "&plankv;": "\u210F", "&plus;": "+", "&plusacir;": "\u2A23", "&plusb;": "\u229E", "&pluscir;": "\u2A22", "&plusdo;": "\u2214", "&plusdu;": "\u2A25", "&pluse;": "\u2A72", "&plusmn": "\xB1", "&plusmn;": "\xB1", "&plussim;": "\u2A26", "&plustwo;": "\u2A27", "&pm;": "\xB1", "&pointint;": "\u2A15", "&popf;": "\u{1D561}", "&pound": "\xA3", "&pound;": "\xA3", "&pr;": "\u227A", "&prE;": "\u2AB3", "&prap;": "\u2AB7", "&prcue;": "\u227C", "&pre;": "\u2AAF", "&prec;": "\u227A", "&precapprox;": "\u2AB7", "&preccurlyeq;": "\u227C", "&preceq;": "\u2AAF", "&precnapprox;": "\u2AB9", "&precneqq;": "\u2AB5", "&precnsim;": "\u22E8", "&precsim;": "\u227E", "&prime;": "\u2032", "&primes;": "\u2119", "&prnE;": "\u2AB5", "&prnap;": "\u2AB9", "&prnsim;": "\u22E8", "&prod;": "\u220F", "&profalar;": "\u232E", "&profline;": "\u2312", "&profsurf;": "\u2313", "&prop;": "\u221D", "&propto;": "\u221D", "&prsim;": "\u227E", "&prurel;": "\u22B0", "&pscr;": "\u{1D4C5}", "&psi;": "\u03C8", "&puncsp;": "\u2008", "&qfr;": "\u{1D52E}", "&qint;": "\u2A0C", "&qopf;": "\u{1D562}", "&qprime;": "\u2057", "&qscr;": "\u{1D4C6}", "&quaternions;": "\u210D", "&quatint;": "\u2A16", "&quest;": "?", "&questeq;": "\u225F", "&quot": '"', "&quot;": '"', "&rAarr;": "\u21DB", "&rArr;": "\u21D2", "&rAtail;": "\u291C", "&rBarr;": "\u290F", "&rHar;": "\u2964", "&race;": "\u223D\u0331", "&racute;": "\u0155", "&radic;": "\u221A", "&raemptyv;": "\u29B3", "&rang;": "\u27E9", "&rangd;": "\u2992", "&range;": "\u29A5", "&rangle;": "\u27E9", "&raquo": "\xBB", "&raquo;": "\xBB", "&rarr;": "\u2192", "&rarrap;": "\u2975", "&rarrb;": "\u21E5", "&rarrbfs;": "\u2920", "&rarrc;": "\u2933", "&rarrfs;": "\u291E", "&rarrhk;": "\u21AA", "&rarrlp;": "\u21AC", "&rarrpl;": "\u2945", "&rarrsim;": "\u2974", "&rarrtl;": "\u21A3", "&rarrw;": "\u219D", "&ratail;": "\u291A", "&ratio;": "\u2236", "&rationals;": "\u211A", "&rbarr;": "\u290D", "&rbbrk;": "\u2773", "&rbrace;": "}", "&rbrack;": "]", "&rbrke;": "\u298C", "&rbrksld;": "\u298E", "&rbrkslu;": "\u2990", "&rcaron;": "\u0159", "&rcedil;": "\u0157", "&rceil;": "\u2309", "&rcub;": "}", "&rcy;": "\u0440", "&rdca;": "\u2937", "&rdldhar;": "\u2969", "&rdquo;": "\u201D", "&rdquor;": "\u201D", "&rdsh;": "\u21B3", "&real;": "\u211C", "&realine;": "\u211B", "&realpart;": "\u211C", "&reals;": "\u211D", "&rect;": "\u25AD", "&reg": "\xAE", "&reg;": "\xAE", "&rfisht;": "\u297D", "&rfloor;": "\u230B", "&rfr;": "\u{1D52F}", "&rhard;": "\u21C1", "&rharu;": "\u21C0", "&rharul;": "\u296C", "&rho;": "\u03C1", "&rhov;": "\u03F1", "&rightarrow;": "\u2192", "&rightarrowtail;": "\u21A3", "&rightharpoondown;": "\u21C1", "&rightharpoonup;": "\u21C0", "&rightleftarrows;": "\u21C4", "&rightleftharpoons;": "\u21CC", "&rightrightarrows;": "\u21C9", "&rightsquigarrow;": "\u219D", "&rightthreetimes;": "\u22CC", "&ring;": "\u02DA", "&risingdotseq;": "\u2253", "&rlarr;": "\u21C4", "&rlhar;": "\u21CC", "&rlm;": "\u200F", "&rmoust;": "\u23B1", "&rmoustache;": "\u23B1", "&rnmid;": "\u2AEE", "&roang;": "\u27ED", "&roarr;": "\u21FE", "&robrk;": "\u27E7", "&ropar;": "\u2986", "&ropf;": "\u{1D563}", "&roplus;": "\u2A2E", "&rotimes;": "\u2A35", "&rpar;": ")", "&rpargt;": "\u2994", "&rppolint;": "\u2A12", "&rrarr;": "\u21C9", "&rsaquo;": "\u203A", "&rscr;": "\u{1D4C7}", "&rsh;": "\u21B1", "&rsqb;": "]", "&rsquo;": "\u2019", "&rsquor;": "\u2019", "&rthree;": "\u22CC", "&rtimes;": "\u22CA", "&rtri;": "\u25B9", "&rtrie;": "\u22B5", "&rtrif;": "\u25B8", "&rtriltri;": "\u29CE", "&ruluhar;": "\u2968", "&rx;": "\u211E", "&sacute;": "\u015B", "&sbquo;": "\u201A", "&sc;": "\u227B", "&scE;": "\u2AB4", "&scap;": "\u2AB8", "&scaron;": "\u0161", "&sccue;": "\u227D", "&sce;": "\u2AB0", "&scedil;": "\u015F", "&scirc;": "\u015D", "&scnE;": "\u2AB6", "&scnap;": "\u2ABA", "&scnsim;": "\u22E9", "&scpolint;": "\u2A13", "&scsim;": "\u227F", "&scy;": "\u0441", "&sdot;": "\u22C5", "&sdotb;": "\u22A1", "&sdote;": "\u2A66", "&seArr;": "\u21D8", "&searhk;": "\u2925", "&searr;": "\u2198", "&searrow;": "\u2198", "&sect": "\xA7", "&sect;": "\xA7", "&semi;": ";", "&seswar;": "\u2929", "&setminus;": "\u2216", "&setmn;": "\u2216", "&sext;": "\u2736", "&sfr;": "\u{1D530}", "&sfrown;": "\u2322", "&sharp;": "\u266F", "&shchcy;": "\u0449", "&shcy;": "\u0448", "&shortmid;": "\u2223", "&shortparallel;": "\u2225", "&shy": "\xAD", "&shy;": "\xAD", "&sigma;": "\u03C3", "&sigmaf;": "\u03C2", "&sigmav;": "\u03C2", "&sim;": "\u223C", "&simdot;": "\u2A6A", "&sime;": "\u2243", "&simeq;": "\u2243", "&simg;": "\u2A9E", "&simgE;": "\u2AA0", "&siml;": "\u2A9D", "&simlE;": "\u2A9F", "&simne;": "\u2246", "&simplus;": "\u2A24", "&simrarr;": "\u2972", "&slarr;": "\u2190", "&smallsetminus;": "\u2216", "&smashp;": "\u2A33", "&smeparsl;": "\u29E4", "&smid;": "\u2223", "&smile;": "\u2323", "&smt;": "\u2AAA", "&smte;": "\u2AAC", "&smtes;": "\u2AAC\uFE00", "&softcy;": "\u044C", "&sol;": "/", "&solb;": "\u29C4", "&solbar;": "\u233F", "&sopf;": "\u{1D564}", "&spades;": "\u2660", "&spadesuit;": "\u2660", "&spar;": "\u2225", "&sqcap;": "\u2293", "&sqcaps;": "\u2293\uFE00", "&sqcup;": "\u2294", "&sqcups;": "\u2294\uFE00", "&sqsub;": "\u228F", "&sqsube;": "\u2291", "&sqsubset;": "\u228F", "&sqsubseteq;": "\u2291", "&sqsup;": "\u2290", "&sqsupe;": "\u2292", "&sqsupset;": "\u2290", "&sqsupseteq;": "\u2292", "&squ;": "\u25A1", "&square;": "\u25A1", "&squarf;": "\u25AA", "&squf;": "\u25AA", "&srarr;": "\u2192", "&sscr;": "\u{1D4C8}", "&ssetmn;": "\u2216", "&ssmile;": "\u2323", "&sstarf;": "\u22C6", "&star;": "\u2606", "&starf;": "\u2605", "&straightepsilon;": "\u03F5", "&straightphi;": "\u03D5", "&strns;": "\xAF", "&sub;": "\u2282", "&subE;": "\u2AC5", "&subdot;": "\u2ABD", "&sube;": "\u2286", "&subedot;": "\u2AC3", "&submult;": "\u2AC1", "&subnE;": "\u2ACB", "&subne;": "\u228A", "&subplus;": "\u2ABF", "&subrarr;": "\u2979", "&subset;": "\u2282", "&subseteq;": "\u2286", "&subseteqq;": "\u2AC5", "&subsetneq;": "\u228A", "&subsetneqq;": "\u2ACB", "&subsim;": "\u2AC7", "&subsub;": "\u2AD5", "&subsup;": "\u2AD3", "&succ;": "\u227B", "&succapprox;": "\u2AB8", "&succcurlyeq;": "\u227D", "&succeq;": "\u2AB0", "&succnapprox;": "\u2ABA", "&succneqq;": "\u2AB6", "&succnsim;": "\u22E9", "&succsim;": "\u227F", "&sum;": "\u2211", "&sung;": "\u266A", "&sup1": "\xB9", "&sup1;": "\xB9", "&sup2": "\xB2", "&sup2;": "\xB2", "&sup3": "\xB3", "&sup3;": "\xB3", "&sup;": "\u2283", "&supE;": "\u2AC6", "&supdot;": "\u2ABE", "&supdsub;": "\u2AD8", "&supe;": "\u2287", "&supedot;": "\u2AC4", "&suphsol;": "\u27C9", "&suphsub;": "\u2AD7", "&suplarr;": "\u297B", "&supmult;": "\u2AC2", "&supnE;": "\u2ACC", "&supne;": "\u228B", "&supplus;": "\u2AC0", "&supset;": "\u2283", "&supseteq;": "\u2287", "&supseteqq;": "\u2AC6", "&supsetneq;": "\u228B", "&supsetneqq;": "\u2ACC", "&supsim;": "\u2AC8", "&supsub;": "\u2AD4", "&supsup;": "\u2AD6", "&swArr;": "\u21D9", "&swarhk;": "\u2926", "&swarr;": "\u2199", "&swarrow;": "\u2199", "&swnwar;": "\u292A", "&szlig": "\xDF", "&szlig;": "\xDF", "&target;": "\u2316", "&tau;": "\u03C4", "&tbrk;": "\u23B4", "&tcaron;": "\u0165", "&tcedil;": "\u0163", "&tcy;": "\u0442", "&tdot;": "\u20DB", "&telrec;": "\u2315", "&tfr;": "\u{1D531}", "&there4;": "\u2234", "&therefore;": "\u2234", "&theta;": "\u03B8", "&thetasym;": "\u03D1", "&thetav;": "\u03D1", "&thickapprox;": "\u2248", "&thicksim;": "\u223C", "&thinsp;": "\u2009", "&thkap;": "\u2248", "&thksim;": "\u223C", "&thorn": "\xFE", "&thorn;": "\xFE", "&tilde;": "\u02DC", "&times": "\xD7", "&times;": "\xD7", "&timesb;": "\u22A0", "&timesbar;": "\u2A31", "&timesd;": "\u2A30", "&tint;": "\u222D", "&toea;": "\u2928", "&top;": "\u22A4", "&topbot;": "\u2336", "&topcir;": "\u2AF1", "&topf;": "\u{1D565}", "&topfork;": "\u2ADA", "&tosa;": "\u2929", "&tprime;": "\u2034", "&trade;": "\u2122", "&triangle;": "\u25B5", "&triangledown;": "\u25BF", "&triangleleft;": "\u25C3", "&trianglelefteq;": "\u22B4", "&triangleq;": "\u225C", "&triangleright;": "\u25B9", "&trianglerighteq;": "\u22B5", "&tridot;": "\u25EC", "&trie;": "\u225C", "&triminus;": "\u2A3A", "&triplus;": "\u2A39", "&trisb;": "\u29CD", "&tritime;": "\u2A3B", "&trpezium;": "\u23E2", "&tscr;": "\u{1D4C9}", "&tscy;": "\u0446", "&tshcy;": "\u045B", "&tstrok;": "\u0167", "&twixt;": "\u226C", "&twoheadleftarrow;": "\u219E", "&twoheadrightarrow;": "\u21A0", "&uArr;": "\u21D1", "&uHar;": "\u2963", "&uacute": "\xFA", "&uacute;": "\xFA", "&uarr;": "\u2191", "&ubrcy;": "\u045E", "&ubreve;": "\u016D", "&ucirc": "\xFB", "&ucirc;": "\xFB", "&ucy;": "\u0443", "&udarr;": "\u21C5", "&udblac;": "\u0171", "&udhar;": "\u296E", "&ufisht;": "\u297E", "&ufr;": "\u{1D532}", "&ugrave": "\xF9", "&ugrave;": "\xF9", "&uharl;": "\u21BF", "&uharr;": "\u21BE", "&uhblk;": "\u2580", "&ulcorn;": "\u231C", "&ulcorner;": "\u231C", "&ulcrop;": "\u230F", "&ultri;": "\u25F8", "&umacr;": "\u016B", "&uml": "\xA8", "&uml;": "\xA8", "&uogon;": "\u0173", "&uopf;": "\u{1D566}", "&uparrow;": "\u2191", "&updownarrow;": "\u2195", "&upharpoonleft;": "\u21BF", "&upharpoonright;": "\u21BE", "&uplus;": "\u228E", "&upsi;": "\u03C5", "&upsih;": "\u03D2", "&upsilon;": "\u03C5", "&upuparrows;": "\u21C8", "&urcorn;": "\u231D", "&urcorner;": "\u231D", "&urcrop;": "\u230E", "&uring;": "\u016F", "&urtri;": "\u25F9", "&uscr;": "\u{1D4CA}", "&utdot;": "\u22F0", "&utilde;": "\u0169", "&utri;": "\u25B5", "&utrif;": "\u25B4", "&uuarr;": "\u21C8", "&uuml": "\xFC", "&uuml;": "\xFC", "&uwangle;": "\u29A7", "&vArr;": "\u21D5", "&vBar;": "\u2AE8", "&vBarv;": "\u2AE9", "&vDash;": "\u22A8", "&vangrt;": "\u299C", "&varepsilon;": "\u03F5", "&varkappa;": "\u03F0", "&varnothing;": "\u2205", "&varphi;": "\u03D5", "&varpi;": "\u03D6", "&varpropto;": "\u221D", "&varr;": "\u2195", "&varrho;": "\u03F1", "&varsigma;": "\u03C2", "&varsubsetneq;": "\u228A\uFE00", "&varsubsetneqq;": "\u2ACB\uFE00", "&varsupsetneq;": "\u228B\uFE00", "&varsupsetneqq;": "\u2ACC\uFE00", "&vartheta;": "\u03D1", "&vartriangleleft;": "\u22B2", "&vartriangleright;": "\u22B3", "&vcy;": "\u0432", "&vdash;": "\u22A2", "&vee;": "\u2228", "&veebar;": "\u22BB", "&veeeq;": "\u225A", "&vellip;": "\u22EE", "&verbar;": "|", "&vert;": "|", "&vfr;": "\u{1D533}", "&vltri;": "\u22B2", "&vnsub;": "\u2282\u20D2", "&vnsup;": "\u2283\u20D2", "&vopf;": "\u{1D567}", "&vprop;": "\u221D", "&vrtri;": "\u22B3", "&vscr;": "\u{1D4CB}", "&vsubnE;": "\u2ACB\uFE00", "&vsubne;": "\u228A\uFE00", "&vsupnE;": "\u2ACC\uFE00", "&vsupne;": "\u228B\uFE00", "&vzigzag;": "\u299A", "&wcirc;": "\u0175", "&wedbar;": "\u2A5F", "&wedge;": "\u2227", "&wedgeq;": "\u2259", "&weierp;": "\u2118", "&wfr;": "\u{1D534}", "&wopf;": "\u{1D568}", "&wp;": "\u2118", "&wr;": "\u2240", "&wreath;": "\u2240", "&wscr;": "\u{1D4CC}", "&xcap;": "\u22C2", "&xcirc;": "\u25EF", "&xcup;": "\u22C3", "&xdtri;": "\u25BD", "&xfr;": "\u{1D535}", "&xhArr;": "\u27FA", "&xharr;": "\u27F7", "&xi;": "\u03BE", "&xlArr;": "\u27F8", "&xlarr;": "\u27F5", "&xmap;": "\u27FC", "&xnis;": "\u22FB", "&xodot;": "\u2A00", "&xopf;": "\u{1D569}", "&xoplus;": "\u2A01", "&xotime;": "\u2A02", "&xrArr;": "\u27F9", "&xrarr;": "\u27F6", "&xscr;": "\u{1D4CD}", "&xsqcup;": "\u2A06", "&xuplus;": "\u2A04", "&xutri;": "\u25B3", "&xvee;": "\u22C1", "&xwedge;": "\u22C0", "&yacute": "\xFD", "&yacute;": "\xFD", "&yacy;": "\u044F", "&ycirc;": "\u0177", "&ycy;": "\u044B", "&yen": "\xA5", "&yen;": "\xA5", "&yfr;": "\u{1D536}", "&yicy;": "\u0457", "&yopf;": "\u{1D56A}", "&yscr;": "\u{1D4CE}", "&yucy;": "\u044E", "&yuml": "\xFF", "&yuml;": "\xFF", "&zacute;": "\u017A", "&zcaron;": "\u017E", "&zcy;": "\u0437", "&zdot;": "\u017C", "&zeetrf;": "\u2128", "&zeta;": "\u03B6", "&zfr;": "\u{1D537}", "&zhcy;": "\u0436", "&zigrarr;": "\u21DD", "&zopf;": "\u{1D56B}", "&zscr;": "\u{1D4CF}", "&zwj;": "\u200D", "&zwnj;": "\u200C" }, characters: { "\xC6": "&AElig;", "&": "&amp;", "\xC1": "&Aacute;", "\u0102": "&Abreve;", "\xC2": "&Acirc;", "\u0410": "&Acy;", "\u{1D504}": "&Afr;", "\xC0": "&Agrave;", "\u0391": "&Alpha;", "\u0100": "&Amacr;", "\u2A53": "&And;", "\u0104": "&Aogon;", "\u{1D538}": "&Aopf;", "\u2061": "&af;", "\xC5": "&angst;", "\u{1D49C}": "&Ascr;", "\u2254": "&coloneq;", "\xC3": "&Atilde;", "\xC4": "&Auml;", "\u2216": "&ssetmn;", "\u2AE7": "&Barv;", "\u2306": "&doublebarwedge;", "\u0411": "&Bcy;", "\u2235": "&because;", "\u212C": "&bernou;", "\u0392": "&Beta;", "\u{1D505}": "&Bfr;", "\u{1D539}": "&Bopf;", "\u02D8": "&breve;", "\u224E": "&bump;", "\u0427": "&CHcy;", "\xA9": "&copy;", "\u0106": "&Cacute;", "\u22D2": "&Cap;", "\u2145": "&DD;", "\u212D": "&Cfr;", "\u010C": "&Ccaron;", "\xC7": "&Ccedil;", "\u0108": "&Ccirc;", "\u2230": "&Cconint;", "\u010A": "&Cdot;", "\xB8": "&cedil;", "\xB7": "&middot;", "\u03A7": "&Chi;", "\u2299": "&odot;", "\u2296": "&ominus;", "\u2295": "&oplus;", "\u2297": "&otimes;", "\u2232": "&cwconint;", "\u201D": "&rdquor;", "\u2019": "&rsquor;", "\u2237": "&Proportion;", "\u2A74": "&Colone;", "\u2261": "&equiv;", "\u222F": "&DoubleContourIntegral;", "\u222E": "&oint;", "\u2102": "&complexes;", "\u2210": "&coprod;", "\u2233": "&awconint;", "\u2A2F": "&Cross;", "\u{1D49E}": "&Cscr;", "\u22D3": "&Cup;", "\u224D": "&asympeq;", "\u2911": "&DDotrahd;", "\u0402": "&DJcy;", "\u0405": "&DScy;", "\u040F": "&DZcy;", "\u2021": "&ddagger;", "\u21A1": "&Darr;", "\u2AE4": "&DoubleLeftTee;", "\u010E": "&Dcaron;", "\u0414": "&Dcy;", "\u2207": "&nabla;", "\u0394": "&Delta;", "\u{1D507}": "&Dfr;", "\xB4": "&acute;", "\u02D9": "&dot;", "\u02DD": "&dblac;", "`": "&grave;", "\u02DC": "&tilde;", "\u22C4": "&diamond;", "\u2146": "&dd;", "\u{1D53B}": "&Dopf;", "\xA8": "&uml;", "\u20DC": "&DotDot;", "\u2250": "&esdot;", "\u21D3": "&dArr;", "\u21D0": "&lArr;", "\u21D4": "&iff;", "\u27F8": "&xlArr;", "\u27FA": "&xhArr;", "\u27F9": "&xrArr;", "\u21D2": "&rArr;", "\u22A8": "&vDash;", "\u21D1": "&uArr;", "\u21D5": "&vArr;", "\u2225": "&spar;", "\u2193": "&downarrow;", "\u2913": "&DownArrowBar;", "\u21F5": "&duarr;", "\u0311": "&DownBreve;", "\u2950": "&DownLeftRightVector;", "\u295E": "&DownLeftTeeVector;", "\u21BD": "&lhard;", "\u2956": "&DownLeftVectorBar;", "\u295F": "&DownRightTeeVector;", "\u21C1": "&rightharpoondown;", "\u2957": "&DownRightVectorBar;", "\u22A4": "&top;", "\u21A7": "&mapstodown;", "\u{1D49F}": "&Dscr;", "\u0110": "&Dstrok;", "\u014A": "&ENG;", "\xD0": "&ETH;", "\xC9": "&Eacute;", "\u011A": "&Ecaron;", "\xCA": "&Ecirc;", "\u042D": "&Ecy;", "\u0116": "&Edot;", "\u{1D508}": "&Efr;", "\xC8": "&Egrave;", "\u2208": "&isinv;", "\u0112": "&Emacr;", "\u25FB": "&EmptySmallSquare;", "\u25AB": "&EmptyVerySmallSquare;", "\u0118": "&Eogon;", "\u{1D53C}": "&Eopf;", "\u0395": "&Epsilon;", "\u2A75": "&Equal;", "\u2242": "&esim;", "\u21CC": "&rlhar;", "\u2130": "&expectation;", "\u2A73": "&Esim;", "\u0397": "&Eta;", "\xCB": "&Euml;", "\u2203": "&exist;", "\u2147": "&exponentiale;", "\u0424": "&Fcy;", "\u{1D509}": "&Ffr;", "\u25FC": "&FilledSmallSquare;", "\u25AA": "&squf;", "\u{1D53D}": "&Fopf;", "\u2200": "&forall;", "\u2131": "&Fscr;", "\u0403": "&GJcy;", ">": "&gt;", "\u0393": "&Gamma;", "\u03DC": "&Gammad;", "\u011E": "&Gbreve;", "\u0122": "&Gcedil;", "\u011C": "&Gcirc;", "\u0413": "&Gcy;", "\u0120": "&Gdot;", "\u{1D50A}": "&Gfr;", "\u22D9": "&ggg;", "\u{1D53E}": "&Gopf;", "\u2265": "&geq;", "\u22DB": "&gtreqless;", "\u2267": "&geqq;", "\u2AA2": "&GreaterGreater;", "\u2277": "&gtrless;", "\u2A7E": "&ges;", "\u2273": "&gtrsim;", "\u{1D4A2}": "&Gscr;", "\u226B": "&gg;", "\u042A": "&HARDcy;", "\u02C7": "&caron;", "^": "&Hat;", "\u0124": "&Hcirc;", "\u210C": "&Poincareplane;", "\u210B": "&hamilt;", "\u210D": "&quaternions;", "\u2500": "&boxh;", "\u0126": "&Hstrok;", "\u224F": "&bumpeq;", "\u0415": "&IEcy;", "\u0132": "&IJlig;", "\u0401": "&IOcy;", "\xCD": "&Iacute;", "\xCE": "&Icirc;", "\u0418": "&Icy;", "\u0130": "&Idot;", "\u2111": "&imagpart;", "\xCC": "&Igrave;", "\u012A": "&Imacr;", "\u2148": "&ii;", "\u222C": "&Int;", "\u222B": "&int;", "\u22C2": "&xcap;", "\u2063": "&ic;", "\u2062": "&it;", "\u012E": "&Iogon;", "\u{1D540}": "&Iopf;", "\u0399": "&Iota;", "\u2110": "&imagline;", "\u0128": "&Itilde;", "\u0406": "&Iukcy;", "\xCF": "&Iuml;", "\u0134": "&Jcirc;", "\u0419": "&Jcy;", "\u{1D50D}": "&Jfr;", "\u{1D541}": "&Jopf;", "\u{1D4A5}": "&Jscr;", "\u0408": "&Jsercy;", "\u0404": "&Jukcy;", "\u0425": "&KHcy;", "\u040C": "&KJcy;", "\u039A": "&Kappa;", "\u0136": "&Kcedil;", "\u041A": "&Kcy;", "\u{1D50E}": "&Kfr;", "\u{1D542}": "&Kopf;", "\u{1D4A6}": "&Kscr;", "\u0409": "&LJcy;", "<": "&lt;", "\u0139": "&Lacute;", "\u039B": "&Lambda;", "\u27EA": "&Lang;", "\u2112": "&lagran;", "\u219E": "&twoheadleftarrow;", "\u013D": "&Lcaron;", "\u013B": "&Lcedil;", "\u041B": "&Lcy;", "\u27E8": "&langle;", "\u2190": "&slarr;", "\u21E4": "&larrb;", "\u21C6": "&lrarr;", "\u2308": "&lceil;", "\u27E6": "&lobrk;", "\u2961": "&LeftDownTeeVector;", "\u21C3": "&downharpoonleft;", "\u2959": "&LeftDownVectorBar;", "\u230A": "&lfloor;", "\u2194": "&leftrightarrow;", "\u294E": "&LeftRightVector;", "\u22A3": "&dashv;", "\u21A4": "&mapstoleft;", "\u295A": "&LeftTeeVector;", "\u22B2": "&vltri;", "\u29CF": "&LeftTriangleBar;", "\u22B4": "&trianglelefteq;", "\u2951": "&LeftUpDownVector;", "\u2960": "&LeftUpTeeVector;", "\u21BF": "&upharpoonleft;", "\u2958": "&LeftUpVectorBar;", "\u21BC": "&lharu;", "\u2952": "&LeftVectorBar;", "\u22DA": "&lesseqgtr;", "\u2266": "&leqq;", "\u2276": "&lg;", "\u2AA1": "&LessLess;", "\u2A7D": "&les;", "\u2272": "&lsim;", "\u{1D50F}": "&Lfr;", "\u22D8": "&Ll;", "\u21DA": "&lAarr;", "\u013F": "&Lmidot;", "\u27F5": "&xlarr;", "\u27F7": "&xharr;", "\u27F6": "&xrarr;", "\u{1D543}": "&Lopf;", "\u2199": "&swarrow;", "\u2198": "&searrow;", "\u21B0": "&lsh;", "\u0141": "&Lstrok;", "\u226A": "&ll;", "\u2905": "&Map;", "\u041C": "&Mcy;", "\u205F": "&MediumSpace;", "\u2133": "&phmmat;", "\u{1D510}": "&Mfr;", "\u2213": "&mp;", "\u{1D544}": "&Mopf;", "\u039C": "&Mu;", "\u040A": "&NJcy;", "\u0143": "&Nacute;", "\u0147": "&Ncaron;", "\u0145": "&Ncedil;", "\u041D": "&Ncy;", "\u200B": "&ZeroWidthSpace;", "\n": "&NewLine;", "\u{1D511}": "&Nfr;", "\u2060": "&NoBreak;", "\xA0": "&nbsp;", "\u2115": "&naturals;", "\u2AEC": "&Not;", "\u2262": "&nequiv;", "\u226D": "&NotCupCap;", "\u2226": "&nspar;", "\u2209": "&notinva;", "\u2260": "&ne;", "\u2242\u0338": "&nesim;", "\u2204": "&nexists;", "\u226F": "&ngtr;", "\u2271": "&ngeq;", "\u2267\u0338": "&ngeqq;", "\u226B\u0338": "&nGtv;", "\u2279": "&ntgl;", "\u2A7E\u0338": "&nges;", "\u2275": "&ngsim;", "\u224E\u0338": "&nbump;", "\u224F\u0338": "&nbumpe;", "\u22EA": "&ntriangleleft;", "\u29CF\u0338": "&NotLeftTriangleBar;", "\u22EC": "&ntrianglelefteq;", "\u226E": "&nlt;", "\u2270": "&nleq;", "\u2278": "&ntlg;", "\u226A\u0338": "&nLtv;", "\u2A7D\u0338": "&nles;", "\u2274": "&nlsim;", "\u2AA2\u0338": "&NotNestedGreaterGreater;", "\u2AA1\u0338": "&NotNestedLessLess;", "\u2280": "&nprec;", "\u2AAF\u0338": "&npreceq;", "\u22E0": "&nprcue;", "\u220C": "&notniva;", "\u22EB": "&ntriangleright;", "\u29D0\u0338": "&NotRightTriangleBar;", "\u22ED": "&ntrianglerighteq;", "\u228F\u0338": "&NotSquareSubset;", "\u22E2": "&nsqsube;", "\u2290\u0338": "&NotSquareSuperset;", "\u22E3": "&nsqsupe;", "\u2282\u20D2": "&vnsub;", "\u2288": "&nsubseteq;", "\u2281": "&nsucc;", "\u2AB0\u0338": "&nsucceq;", "\u22E1": "&nsccue;", "\u227F\u0338": "&NotSucceedsTilde;", "\u2283\u20D2": "&vnsup;", "\u2289": "&nsupseteq;", "\u2241": "&nsim;", "\u2244": "&nsimeq;", "\u2247": "&ncong;", "\u2249": "&napprox;", "\u2224": "&nsmid;", "\u{1D4A9}": "&Nscr;", "\xD1": "&Ntilde;", "\u039D": "&Nu;", "\u0152": "&OElig;", "\xD3": "&Oacute;", "\xD4": "&Ocirc;", "\u041E": "&Ocy;", "\u0150": "&Odblac;", "\u{1D512}": "&Ofr;", "\xD2": "&Ograve;", "\u014C": "&Omacr;", "\u03A9": "&ohm;", "\u039F": "&Omicron;", "\u{1D546}": "&Oopf;", "\u201C": "&ldquo;", "\u2018": "&lsquo;", "\u2A54": "&Or;", "\u{1D4AA}": "&Oscr;", "\xD8": "&Oslash;", "\xD5": "&Otilde;", "\u2A37": "&Otimes;", "\xD6": "&Ouml;", "\u203E": "&oline;", "\u23DE": "&OverBrace;", "\u23B4": "&tbrk;", "\u23DC": "&OverParenthesis;", "\u2202": "&part;", "\u041F": "&Pcy;", "\u{1D513}": "&Pfr;", "\u03A6": "&Phi;", "\u03A0": "&Pi;", "\xB1": "&pm;", "\u2119": "&primes;", "\u2ABB": "&Pr;", "\u227A": "&prec;", "\u2AAF": "&preceq;", "\u227C": "&preccurlyeq;", "\u227E": "&prsim;", "\u2033": "&Prime;", "\u220F": "&prod;", "\u221D": "&vprop;", "\u{1D4AB}": "&Pscr;", "\u03A8": "&Psi;", '"': "&quot;", "\u{1D514}": "&Qfr;", "\u211A": "&rationals;", "\u{1D4AC}": "&Qscr;", "\u2910": "&drbkarow;", "\xAE": "&reg;", "\u0154": "&Racute;", "\u27EB": "&Rang;", "\u21A0": "&twoheadrightarrow;", "\u2916": "&Rarrtl;", "\u0158": "&Rcaron;", "\u0156": "&Rcedil;", "\u0420": "&Rcy;", "\u211C": "&realpart;", "\u220B": "&niv;", "\u21CB": "&lrhar;", "\u296F": "&duhar;", "\u03A1": "&Rho;", "\u27E9": "&rangle;", "\u2192": "&srarr;", "\u21E5": "&rarrb;", "\u21C4": "&rlarr;", "\u2309": "&rceil;", "\u27E7": "&robrk;", "\u295D": "&RightDownTeeVector;", "\u21C2": "&downharpoonright;", "\u2955": "&RightDownVectorBar;", "\u230B": "&rfloor;", "\u22A2": "&vdash;", "\u21A6": "&mapsto;", "\u295B": "&RightTeeVector;", "\u22B3": "&vrtri;", "\u29D0": "&RightTriangleBar;", "\u22B5": "&trianglerighteq;", "\u294F": "&RightUpDownVector;", "\u295C": "&RightUpTeeVector;", "\u21BE": "&upharpoonright;", "\u2954": "&RightUpVectorBar;", "\u21C0": "&rightharpoonup;", "\u2953": "&RightVectorBar;", "\u211D": "&reals;", "\u2970": "&RoundImplies;", "\u21DB": "&rAarr;", "\u211B": "&realine;", "\u21B1": "&rsh;", "\u29F4": "&RuleDelayed;", "\u0429": "&SHCHcy;", "\u0428": "&SHcy;", "\u042C": "&SOFTcy;", "\u015A": "&Sacute;", "\u2ABC": "&Sc;", "\u0160": "&Scaron;", "\u015E": "&Scedil;", "\u015C": "&Scirc;", "\u0421": "&Scy;", "\u{1D516}": "&Sfr;", "\u2191": "&uparrow;", "\u03A3": "&Sigma;", "\u2218": "&compfn;", "\u{1D54A}": "&Sopf;", "\u221A": "&radic;", "\u25A1": "&square;", "\u2293": "&sqcap;", "\u228F": "&sqsubset;", "\u2291": "&sqsubseteq;", "\u2290": "&sqsupset;", "\u2292": "&sqsupseteq;", "\u2294": "&sqcup;", "\u{1D4AE}": "&Sscr;", "\u22C6": "&sstarf;", "\u22D0": "&Subset;", "\u2286": "&subseteq;", "\u227B": "&succ;", "\u2AB0": "&succeq;", "\u227D": "&succcurlyeq;", "\u227F": "&succsim;", "\u2211": "&sum;", "\u22D1": "&Supset;", "\u2283": "&supset;", "\u2287": "&supseteq;", "\xDE": "&THORN;", "\u2122": "&trade;", "\u040B": "&TSHcy;", "\u0426": "&TScy;", "	": "&Tab;", "\u03A4": "&Tau;", "\u0164": "&Tcaron;", "\u0162": "&Tcedil;", "\u0422": "&Tcy;", "\u{1D517}": "&Tfr;", "\u2234": "&therefore;", "\u0398": "&Theta;", "\u205F\u200A": "&ThickSpace;", "\u2009": "&thinsp;", "\u223C": "&thksim;", "\u2243": "&simeq;", "\u2245": "&cong;", "\u2248": "&thkap;", "\u{1D54B}": "&Topf;", "\u20DB": "&tdot;", "\u{1D4AF}": "&Tscr;", "\u0166": "&Tstrok;", "\xDA": "&Uacute;", "\u219F": "&Uarr;", "\u2949": "&Uarrocir;", "\u040E": "&Ubrcy;", "\u016C": "&Ubreve;", "\xDB": "&Ucirc;", "\u0423": "&Ucy;", "\u0170": "&Udblac;", "\u{1D518}": "&Ufr;", "\xD9": "&Ugrave;", "\u016A": "&Umacr;", _: "&lowbar;", "\u23DF": "&UnderBrace;", "\u23B5": "&bbrk;", "\u23DD": "&UnderParenthesis;", "\u22C3": "&xcup;", "\u228E": "&uplus;", "\u0172": "&Uogon;", "\u{1D54C}": "&Uopf;", "\u2912": "&UpArrowBar;", "\u21C5": "&udarr;", "\u2195": "&varr;", "\u296E": "&udhar;", "\u22A5": "&perp;", "\u21A5": "&mapstoup;", "\u2196": "&nwarrow;", "\u2197": "&nearrow;", "\u03D2": "&upsih;", "\u03A5": "&Upsilon;", "\u016E": "&Uring;", "\u{1D4B0}": "&Uscr;", "\u0168": "&Utilde;", "\xDC": "&Uuml;", "\u22AB": "&VDash;", "\u2AEB": "&Vbar;", "\u0412": "&Vcy;", "\u22A9": "&Vdash;", "\u2AE6": "&Vdashl;", "\u22C1": "&xvee;", "\u2016": "&Vert;", "\u2223": "&smid;", "|": "&vert;", "\u2758": "&VerticalSeparator;", "\u2240": "&wreath;", "\u200A": "&hairsp;", "\u{1D519}": "&Vfr;", "\u{1D54D}": "&Vopf;", "\u{1D4B1}": "&Vscr;", "\u22AA": "&Vvdash;", "\u0174": "&Wcirc;", "\u22C0": "&xwedge;", "\u{1D51A}": "&Wfr;", "\u{1D54E}": "&Wopf;", "\u{1D4B2}": "&Wscr;", "\u{1D51B}": "&Xfr;", "\u039E": "&Xi;", "\u{1D54F}": "&Xopf;", "\u{1D4B3}": "&Xscr;", "\u042F": "&YAcy;", "\u0407": "&YIcy;", "\u042E": "&YUcy;", "\xDD": "&Yacute;", "\u0176": "&Ycirc;", "\u042B": "&Ycy;", "\u{1D51C}": "&Yfr;", "\u{1D550}": "&Yopf;", "\u{1D4B4}": "&Yscr;", "\u0178": "&Yuml;", "\u0416": "&ZHcy;", "\u0179": "&Zacute;", "\u017D": "&Zcaron;", "\u0417": "&Zcy;", "\u017B": "&Zdot;", "\u0396": "&Zeta;", "\u2128": "&zeetrf;", "\u2124": "&integers;", "\u{1D4B5}": "&Zscr;", "\xE1": "&aacute;", "\u0103": "&abreve;", "\u223E": "&mstpos;", "\u223E\u0333": "&acE;", "\u223F": "&acd;", "\xE2": "&acirc;", "\u0430": "&acy;", "\xE6": "&aelig;", "\u{1D51E}": "&afr;", "\xE0": "&agrave;", "\u2135": "&aleph;", "\u03B1": "&alpha;", "\u0101": "&amacr;", "\u2A3F": "&amalg;", "\u2227": "&wedge;", "\u2A55": "&andand;", "\u2A5C": "&andd;", "\u2A58": "&andslope;", "\u2A5A": "&andv;", "\u2220": "&angle;", "\u29A4": "&ange;", "\u2221": "&measuredangle;", "\u29A8": "&angmsdaa;", "\u29A9": "&angmsdab;", "\u29AA": "&angmsdac;", "\u29AB": "&angmsdad;", "\u29AC": "&angmsdae;", "\u29AD": "&angmsdaf;", "\u29AE": "&angmsdag;", "\u29AF": "&angmsdah;", "\u221F": "&angrt;", "\u22BE": "&angrtvb;", "\u299D": "&angrtvbd;", "\u2222": "&angsph;", "\u237C": "&angzarr;", "\u0105": "&aogon;", "\u{1D552}": "&aopf;", "\u2A70": "&apE;", "\u2A6F": "&apacir;", "\u224A": "&approxeq;", "\u224B": "&apid;", "'": "&apos;", "\xE5": "&aring;", "\u{1D4B6}": "&ascr;", "*": "&midast;", "\xE3": "&atilde;", "\xE4": "&auml;", "\u2A11": "&awint;", "\u2AED": "&bNot;", "\u224C": "&bcong;", "\u03F6": "&bepsi;", "\u2035": "&bprime;", "\u223D": "&bsim;", "\u22CD": "&bsime;", "\u22BD": "&barvee;", "\u2305": "&barwedge;", "\u23B6": "&bbrktbrk;", "\u0431": "&bcy;", "\u201E": "&ldquor;", "\u29B0": "&bemptyv;", "\u03B2": "&beta;", "\u2136": "&beth;", "\u226C": "&twixt;", "\u{1D51F}": "&bfr;", "\u25EF": "&xcirc;", "\u2A00": "&xodot;", "\u2A01": "&xoplus;", "\u2A02": "&xotime;", "\u2A06": "&xsqcup;", "\u2605": "&starf;", "\u25BD": "&xdtri;", "\u25B3": "&xutri;", "\u2A04": "&xuplus;", "\u290D": "&rbarr;", "\u29EB": "&lozf;", "\u25B4": "&utrif;", "\u25BE": "&dtrif;", "\u25C2": "&ltrif;", "\u25B8": "&rtrif;", "\u2423": "&blank;", "\u2592": "&blk12;", "\u2591": "&blk14;", "\u2593": "&blk34;", "\u2588": "&block;", "=\u20E5": "&bne;", "\u2261\u20E5": "&bnequiv;", "\u2310": "&bnot;", "\u{1D553}": "&bopf;", "\u22C8": "&bowtie;", "\u2557": "&boxDL;", "\u2554": "&boxDR;", "\u2556": "&boxDl;", "\u2553": "&boxDr;", "\u2550": "&boxH;", "\u2566": "&boxHD;", "\u2569": "&boxHU;", "\u2564": "&boxHd;", "\u2567": "&boxHu;", "\u255D": "&boxUL;", "\u255A": "&boxUR;", "\u255C": "&boxUl;", "\u2559": "&boxUr;", "\u2551": "&boxV;", "\u256C": "&boxVH;", "\u2563": "&boxVL;", "\u2560": "&boxVR;", "\u256B": "&boxVh;", "\u2562": "&boxVl;", "\u255F": "&boxVr;", "\u29C9": "&boxbox;", "\u2555": "&boxdL;", "\u2552": "&boxdR;", "\u2510": "&boxdl;", "\u250C": "&boxdr;", "\u2565": "&boxhD;", "\u2568": "&boxhU;", "\u252C": "&boxhd;", "\u2534": "&boxhu;", "\u229F": "&minusb;", "\u229E": "&plusb;", "\u22A0": "&timesb;", "\u255B": "&boxuL;", "\u2558": "&boxuR;", "\u2518": "&boxul;", "\u2514": "&boxur;", "\u2502": "&boxv;", "\u256A": "&boxvH;", "\u2561": "&boxvL;", "\u255E": "&boxvR;", "\u253C": "&boxvh;", "\u2524": "&boxvl;", "\u251C": "&boxvr;", "\xA6": "&brvbar;", "\u{1D4B7}": "&bscr;", "\u204F": "&bsemi;", "\\": "&bsol;", "\u29C5": "&bsolb;", "\u27C8": "&bsolhsub;", "\u2022": "&bullet;", "\u2AAE": "&bumpE;", "\u0107": "&cacute;", "\u2229": "&cap;", "\u2A44": "&capand;", "\u2A49": "&capbrcup;", "\u2A4B": "&capcap;", "\u2A47": "&capcup;", "\u2A40": "&capdot;", "\u2229\uFE00": "&caps;", "\u2041": "&caret;", "\u2A4D": "&ccaps;", "\u010D": "&ccaron;", "\xE7": "&ccedil;", "\u0109": "&ccirc;", "\u2A4C": "&ccups;", "\u2A50": "&ccupssm;", "\u010B": "&cdot;", "\u29B2": "&cemptyv;", "\xA2": "&cent;", "\u{1D520}": "&cfr;", "\u0447": "&chcy;", "\u2713": "&checkmark;", "\u03C7": "&chi;", "\u25CB": "&cir;", "\u29C3": "&cirE;", "\u02C6": "&circ;", "\u2257": "&cire;", "\u21BA": "&olarr;", "\u21BB": "&orarr;", "\u24C8": "&oS;", "\u229B": "&oast;", "\u229A": "&ocir;", "\u229D": "&odash;", "\u2A10": "&cirfnint;", "\u2AEF": "&cirmid;", "\u29C2": "&cirscir;", "\u2663": "&clubsuit;", ":": "&colon;", ",": "&comma;", "@": "&commat;", "\u2201": "&complement;", "\u2A6D": "&congdot;", "\u{1D554}": "&copf;", "\u2117": "&copysr;", "\u21B5": "&crarr;", "\u2717": "&cross;", "\u{1D4B8}": "&cscr;", "\u2ACF": "&csub;", "\u2AD1": "&csube;", "\u2AD0": "&csup;", "\u2AD2": "&csupe;", "\u22EF": "&ctdot;", "\u2938": "&cudarrl;", "\u2935": "&cudarrr;", "\u22DE": "&curlyeqprec;", "\u22DF": "&curlyeqsucc;", "\u21B6": "&curvearrowleft;", "\u293D": "&cularrp;", "\u222A": "&cup;", "\u2A48": "&cupbrcap;", "\u2A46": "&cupcap;", "\u2A4A": "&cupcup;", "\u228D": "&cupdot;", "\u2A45": "&cupor;", "\u222A\uFE00": "&cups;", "\u21B7": "&curvearrowright;", "\u293C": "&curarrm;", "\u22CE": "&cuvee;", "\u22CF": "&cuwed;", "\xA4": "&curren;", "\u2231": "&cwint;", "\u232D": "&cylcty;", "\u2965": "&dHar;", "\u2020": "&dagger;", "\u2138": "&daleth;", "\u2010": "&hyphen;", "\u290F": "&rBarr;", "\u010F": "&dcaron;", "\u0434": "&dcy;", "\u21CA": "&downdownarrows;", "\u2A77": "&eDDot;", "\xB0": "&deg;", "\u03B4": "&delta;", "\u29B1": "&demptyv;", "\u297F": "&dfisht;", "\u{1D521}": "&dfr;", "\u2666": "&diams;", "\u03DD": "&gammad;", "\u22F2": "&disin;", "\xF7": "&divide;", "\u22C7": "&divonx;", "\u0452": "&djcy;", "\u231E": "&llcorner;", "\u230D": "&dlcrop;", $: "&dollar;", "\u{1D555}": "&dopf;", "\u2251": "&eDot;", "\u2238": "&minusd;", "\u2214": "&plusdo;", "\u22A1": "&sdotb;", "\u231F": "&lrcorner;", "\u230C": "&drcrop;", "\u{1D4B9}": "&dscr;", "\u0455": "&dscy;", "\u29F6": "&dsol;", "\u0111": "&dstrok;", "\u22F1": "&dtdot;", "\u25BF": "&triangledown;", "\u29A6": "&dwangle;", "\u045F": "&dzcy;", "\u27FF": "&dzigrarr;", "\xE9": "&eacute;", "\u2A6E": "&easter;", "\u011B": "&ecaron;", "\u2256": "&eqcirc;", "\xEA": "&ecirc;", "\u2255": "&eqcolon;", "\u044D": "&ecy;", "\u0117": "&edot;", "\u2252": "&fallingdotseq;", "\u{1D522}": "&efr;", "\u2A9A": "&eg;", "\xE8": "&egrave;", "\u2A96": "&eqslantgtr;", "\u2A98": "&egsdot;", "\u2A99": "&el;", "\u23E7": "&elinters;", "\u2113": "&ell;", "\u2A95": "&eqslantless;", "\u2A97": "&elsdot;", "\u0113": "&emacr;", "\u2205": "&varnothing;", "\u2004": "&emsp13;", "\u2005": "&emsp14;", "\u2003": "&emsp;", "\u014B": "&eng;", "\u2002": "&ensp;", "\u0119": "&eogon;", "\u{1D556}": "&eopf;", "\u22D5": "&epar;", "\u29E3": "&eparsl;", "\u2A71": "&eplus;", "\u03B5": "&epsilon;", "\u03F5": "&varepsilon;", "=": "&equals;", "\u225F": "&questeq;", "\u2A78": "&equivDD;", "\u29E5": "&eqvparsl;", "\u2253": "&risingdotseq;", "\u2971": "&erarr;", "\u212F": "&escr;", "\u03B7": "&eta;", "\xF0": "&eth;", "\xEB": "&euml;", "\u20AC": "&euro;", "!": "&excl;", "\u0444": "&fcy;", "\u2640": "&female;", "\uFB03": "&ffilig;", "\uFB00": "&fflig;", "\uFB04": "&ffllig;", "\u{1D523}": "&ffr;", "\uFB01": "&filig;", fj: "&fjlig;", "\u266D": "&flat;", "\uFB02": "&fllig;", "\u25B1": "&fltns;", "\u0192": "&fnof;", "\u{1D557}": "&fopf;", "\u22D4": "&pitchfork;", "\u2AD9": "&forkv;", "\u2A0D": "&fpartint;", "\xBD": "&half;", "\u2153": "&frac13;", "\xBC": "&frac14;", "\u2155": "&frac15;", "\u2159": "&frac16;", "\u215B": "&frac18;", "\u2154": "&frac23;", "\u2156": "&frac25;", "\xBE": "&frac34;", "\u2157": "&frac35;", "\u215C": "&frac38;", "\u2158": "&frac45;", "\u215A": "&frac56;", "\u215D": "&frac58;", "\u215E": "&frac78;", "\u2044": "&frasl;", "\u2322": "&sfrown;", "\u{1D4BB}": "&fscr;", "\u2A8C": "&gtreqqless;", "\u01F5": "&gacute;", "\u03B3": "&gamma;", "\u2A86": "&gtrapprox;", "\u011F": "&gbreve;", "\u011D": "&gcirc;", "\u0433": "&gcy;", "\u0121": "&gdot;", "\u2AA9": "&gescc;", "\u2A80": "&gesdot;", "\u2A82": "&gesdoto;", "\u2A84": "&gesdotol;", "\u22DB\uFE00": "&gesl;", "\u2A94": "&gesles;", "\u{1D524}": "&gfr;", "\u2137": "&gimel;", "\u0453": "&gjcy;", "\u2A92": "&glE;", "\u2AA5": "&gla;", "\u2AA4": "&glj;", "\u2269": "&gneqq;", "\u2A8A": "&gnapprox;", "\u2A88": "&gneq;", "\u22E7": "&gnsim;", "\u{1D558}": "&gopf;", "\u210A": "&gscr;", "\u2A8E": "&gsime;", "\u2A90": "&gsiml;", "\u2AA7": "&gtcc;", "\u2A7A": "&gtcir;", "\u22D7": "&gtrdot;", "\u2995": "&gtlPar;", "\u2A7C": "&gtquest;", "\u2978": "&gtrarr;", "\u2269\uFE00": "&gvnE;", "\u044A": "&hardcy;", "\u2948": "&harrcir;", "\u21AD": "&leftrightsquigarrow;", "\u210F": "&plankv;", "\u0125": "&hcirc;", "\u2665": "&heartsuit;", "\u2026": "&mldr;", "\u22B9": "&hercon;", "\u{1D525}": "&hfr;", "\u2925": "&searhk;", "\u2926": "&swarhk;", "\u21FF": "&hoarr;", "\u223B": "&homtht;", "\u21A9": "&larrhk;", "\u21AA": "&rarrhk;", "\u{1D559}": "&hopf;", "\u2015": "&horbar;", "\u{1D4BD}": "&hscr;", "\u0127": "&hstrok;", "\u2043": "&hybull;", "\xED": "&iacute;", "\xEE": "&icirc;", "\u0438": "&icy;", "\u0435": "&iecy;", "\xA1": "&iexcl;", "\u{1D526}": "&ifr;", "\xEC": "&igrave;", "\u2A0C": "&qint;", "\u222D": "&tint;", "\u29DC": "&iinfin;", "\u2129": "&iiota;", "\u0133": "&ijlig;", "\u012B": "&imacr;", "\u0131": "&inodot;", "\u22B7": "&imof;", "\u01B5": "&imped;", "\u2105": "&incare;", "\u221E": "&infin;", "\u29DD": "&infintie;", "\u22BA": "&intercal;", "\u2A17": "&intlarhk;", "\u2A3C": "&iprod;", "\u0451": "&iocy;", "\u012F": "&iogon;", "\u{1D55A}": "&iopf;", "\u03B9": "&iota;", "\xBF": "&iquest;", "\u{1D4BE}": "&iscr;", "\u22F9": "&isinE;", "\u22F5": "&isindot;", "\u22F4": "&isins;", "\u22F3": "&isinsv;", "\u0129": "&itilde;", "\u0456": "&iukcy;", "\xEF": "&iuml;", "\u0135": "&jcirc;", "\u0439": "&jcy;", "\u{1D527}": "&jfr;", "\u0237": "&jmath;", "\u{1D55B}": "&jopf;", "\u{1D4BF}": "&jscr;", "\u0458": "&jsercy;", "\u0454": "&jukcy;", "\u03BA": "&kappa;", "\u03F0": "&varkappa;", "\u0137": "&kcedil;", "\u043A": "&kcy;", "\u{1D528}": "&kfr;", "\u0138": "&kgreen;", "\u0445": "&khcy;", "\u045C": "&kjcy;", "\u{1D55C}": "&kopf;", "\u{1D4C0}": "&kscr;", "\u291B": "&lAtail;", "\u290E": "&lBarr;", "\u2A8B": "&lesseqqgtr;", "\u2962": "&lHar;", "\u013A": "&lacute;", "\u29B4": "&laemptyv;", "\u03BB": "&lambda;", "\u2991": "&langd;", "\u2A85": "&lessapprox;", "\xAB": "&laquo;", "\u291F": "&larrbfs;", "\u291D": "&larrfs;", "\u21AB": "&looparrowleft;", "\u2939": "&larrpl;", "\u2973": "&larrsim;", "\u21A2": "&leftarrowtail;", "\u2AAB": "&lat;", "\u2919": "&latail;", "\u2AAD": "&late;", "\u2AAD\uFE00": "&lates;", "\u290C": "&lbarr;", "\u2772": "&lbbrk;", "{": "&lcub;", "[": "&lsqb;", "\u298B": "&lbrke;", "\u298F": "&lbrksld;", "\u298D": "&lbrkslu;", "\u013E": "&lcaron;", "\u013C": "&lcedil;", "\u043B": "&lcy;", "\u2936": "&ldca;", "\u2967": "&ldrdhar;", "\u294B": "&ldrushar;", "\u21B2": "&ldsh;", "\u2264": "&leq;", "\u21C7": "&llarr;", "\u22CB": "&lthree;", "\u2AA8": "&lescc;", "\u2A7F": "&lesdot;", "\u2A81": "&lesdoto;", "\u2A83": "&lesdotor;", "\u22DA\uFE00": "&lesg;", "\u2A93": "&lesges;", "\u22D6": "&ltdot;", "\u297C": "&lfisht;", "\u{1D529}": "&lfr;", "\u2A91": "&lgE;", "\u296A": "&lharul;", "\u2584": "&lhblk;", "\u0459": "&ljcy;", "\u296B": "&llhard;", "\u25FA": "&lltri;", "\u0140": "&lmidot;", "\u23B0": "&lmoustache;", "\u2268": "&lneqq;", "\u2A89": "&lnapprox;", "\u2A87": "&lneq;", "\u22E6": "&lnsim;", "\u27EC": "&loang;", "\u21FD": "&loarr;", "\u27FC": "&xmap;", "\u21AC": "&rarrlp;", "\u2985": "&lopar;", "\u{1D55D}": "&lopf;", "\u2A2D": "&loplus;", "\u2A34": "&lotimes;", "\u2217": "&lowast;", "\u25CA": "&lozenge;", "(": "&lpar;", "\u2993": "&lparlt;", "\u296D": "&lrhard;", "\u200E": "&lrm;", "\u22BF": "&lrtri;", "\u2039": "&lsaquo;", "\u{1D4C1}": "&lscr;", "\u2A8D": "&lsime;", "\u2A8F": "&lsimg;", "\u201A": "&sbquo;", "\u0142": "&lstrok;", "\u2AA6": "&ltcc;", "\u2A79": "&ltcir;", "\u22C9": "&ltimes;", "\u2976": "&ltlarr;", "\u2A7B": "&ltquest;", "\u2996": "&ltrPar;", "\u25C3": "&triangleleft;", "\u294A": "&lurdshar;", "\u2966": "&luruhar;", "\u2268\uFE00": "&lvnE;", "\u223A": "&mDDot;", "\xAF": "&strns;", "\u2642": "&male;", "\u2720": "&maltese;", "\u25AE": "&marker;", "\u2A29": "&mcomma;", "\u043C": "&mcy;", "\u2014": "&mdash;", "\u{1D52A}": "&mfr;", "\u2127": "&mho;", "\xB5": "&micro;", "\u2AF0": "&midcir;", "\u2212": "&minus;", "\u2A2A": "&minusdu;", "\u2ADB": "&mlcp;", "\u22A7": "&models;", "\u{1D55E}": "&mopf;", "\u{1D4C2}": "&mscr;", "\u03BC": "&mu;", "\u22B8": "&mumap;", "\u22D9\u0338": "&nGg;", "\u226B\u20D2": "&nGt;", "\u21CD": "&nlArr;", "\u21CE": "&nhArr;", "\u22D8\u0338": "&nLl;", "\u226A\u20D2": "&nLt;", "\u21CF": "&nrArr;", "\u22AF": "&nVDash;", "\u22AE": "&nVdash;", "\u0144": "&nacute;", "\u2220\u20D2": "&nang;", "\u2A70\u0338": "&napE;", "\u224B\u0338": "&napid;", "\u0149": "&napos;", "\u266E": "&natural;", "\u2A43": "&ncap;", "\u0148": "&ncaron;", "\u0146": "&ncedil;", "\u2A6D\u0338": "&ncongdot;", "\u2A42": "&ncup;", "\u043D": "&ncy;", "\u2013": "&ndash;", "\u21D7": "&neArr;", "\u2924": "&nearhk;", "\u2250\u0338": "&nedot;", "\u2928": "&toea;", "\u{1D52B}": "&nfr;", "\u21AE": "&nleftrightarrow;", "\u2AF2": "&nhpar;", "\u22FC": "&nis;", "\u22FA": "&nisd;", "\u045A": "&njcy;", "\u2266\u0338": "&nleqq;", "\u219A": "&nleftarrow;", "\u2025": "&nldr;", "\u{1D55F}": "&nopf;", "\xAC": "&not;", "\u22F9\u0338": "&notinE;", "\u22F5\u0338": "&notindot;", "\u22F7": "&notinvb;", "\u22F6": "&notinvc;", "\u22FE": "&notnivb;", "\u22FD": "&notnivc;", "\u2AFD\u20E5": "&nparsl;", "\u2202\u0338": "&npart;", "\u2A14": "&npolint;", "\u219B": "&nrightarrow;", "\u2933\u0338": "&nrarrc;", "\u219D\u0338": "&nrarrw;", "\u{1D4C3}": "&nscr;", "\u2284": "&nsub;", "\u2AC5\u0338": "&nsubseteqq;", "\u2285": "&nsup;", "\u2AC6\u0338": "&nsupseteqq;", "\xF1": "&ntilde;", "\u03BD": "&nu;", "#": "&num;", "\u2116": "&numero;", "\u2007": "&numsp;", "\u22AD": "&nvDash;", "\u2904": "&nvHarr;", "\u224D\u20D2": "&nvap;", "\u22AC": "&nvdash;", "\u2265\u20D2": "&nvge;", ">\u20D2": "&nvgt;", "\u29DE": "&nvinfin;", "\u2902": "&nvlArr;", "\u2264\u20D2": "&nvle;", "<\u20D2": "&nvlt;", "\u22B4\u20D2": "&nvltrie;", "\u2903": "&nvrArr;", "\u22B5\u20D2": "&nvrtrie;", "\u223C\u20D2": "&nvsim;", "\u21D6": "&nwArr;", "\u2923": "&nwarhk;", "\u2927": "&nwnear;", "\xF3": "&oacute;", "\xF4": "&ocirc;", "\u043E": "&ocy;", "\u0151": "&odblac;", "\u2A38": "&odiv;", "\u29BC": "&odsold;", "\u0153": "&oelig;", "\u29BF": "&ofcir;", "\u{1D52C}": "&ofr;", "\u02DB": "&ogon;", "\xF2": "&ograve;", "\u29C1": "&ogt;", "\u29B5": "&ohbar;", "\u29BE": "&olcir;", "\u29BB": "&olcross;", "\u29C0": "&olt;", "\u014D": "&omacr;", "\u03C9": "&omega;", "\u03BF": "&omicron;", "\u29B6": "&omid;", "\u{1D560}": "&oopf;", "\u29B7": "&opar;", "\u29B9": "&operp;", "\u2228": "&vee;", "\u2A5D": "&ord;", "\u2134": "&oscr;", "\xAA": "&ordf;", "\xBA": "&ordm;", "\u22B6": "&origof;", "\u2A56": "&oror;", "\u2A57": "&orslope;", "\u2A5B": "&orv;", "\xF8": "&oslash;", "\u2298": "&osol;", "\xF5": "&otilde;", "\u2A36": "&otimesas;", "\xF6": "&ouml;", "\u233D": "&ovbar;", "\xB6": "&para;", "\u2AF3": "&parsim;", "\u2AFD": "&parsl;", "\u043F": "&pcy;", "%": "&percnt;", ".": "&period;", "\u2030": "&permil;", "\u2031": "&pertenk;", "\u{1D52D}": "&pfr;", "\u03C6": "&phi;", "\u03D5": "&varphi;", "\u260E": "&phone;", "\u03C0": "&pi;", "\u03D6": "&varpi;", "\u210E": "&planckh;", "+": "&plus;", "\u2A23": "&plusacir;", "\u2A22": "&pluscir;", "\u2A25": "&plusdu;", "\u2A72": "&pluse;", "\u2A26": "&plussim;", "\u2A27": "&plustwo;", "\u2A15": "&pointint;", "\u{1D561}": "&popf;", "\xA3": "&pound;", "\u2AB3": "&prE;", "\u2AB7": "&precapprox;", "\u2AB9": "&prnap;", "\u2AB5": "&prnE;", "\u22E8": "&prnsim;", "\u2032": "&prime;", "\u232E": "&profalar;", "\u2312": "&profline;", "\u2313": "&profsurf;", "\u22B0": "&prurel;", "\u{1D4C5}": "&pscr;", "\u03C8": "&psi;", "\u2008": "&puncsp;", "\u{1D52E}": "&qfr;", "\u{1D562}": "&qopf;", "\u2057": "&qprime;", "\u{1D4C6}": "&qscr;", "\u2A16": "&quatint;", "?": "&quest;", "\u291C": "&rAtail;", "\u2964": "&rHar;", "\u223D\u0331": "&race;", "\u0155": "&racute;", "\u29B3": "&raemptyv;", "\u2992": "&rangd;", "\u29A5": "&range;", "\xBB": "&raquo;", "\u2975": "&rarrap;", "\u2920": "&rarrbfs;", "\u2933": "&rarrc;", "\u291E": "&rarrfs;", "\u2945": "&rarrpl;", "\u2974": "&rarrsim;", "\u21A3": "&rightarrowtail;", "\u219D": "&rightsquigarrow;", "\u291A": "&ratail;", "\u2236": "&ratio;", "\u2773": "&rbbrk;", "}": "&rcub;", "]": "&rsqb;", "\u298C": "&rbrke;", "\u298E": "&rbrksld;", "\u2990": "&rbrkslu;", "\u0159": "&rcaron;", "\u0157": "&rcedil;", "\u0440": "&rcy;", "\u2937": "&rdca;", "\u2969": "&rdldhar;", "\u21B3": "&rdsh;", "\u25AD": "&rect;", "\u297D": "&rfisht;", "\u{1D52F}": "&rfr;", "\u296C": "&rharul;", "\u03C1": "&rho;", "\u03F1": "&varrho;", "\u21C9": "&rrarr;", "\u22CC": "&rthree;", "\u02DA": "&ring;", "\u200F": "&rlm;", "\u23B1": "&rmoustache;", "\u2AEE": "&rnmid;", "\u27ED": "&roang;", "\u21FE": "&roarr;", "\u2986": "&ropar;", "\u{1D563}": "&ropf;", "\u2A2E": "&roplus;", "\u2A35": "&rotimes;", ")": "&rpar;", "\u2994": "&rpargt;", "\u2A12": "&rppolint;", "\u203A": "&rsaquo;", "\u{1D4C7}": "&rscr;", "\u22CA": "&rtimes;", "\u25B9": "&triangleright;", "\u29CE": "&rtriltri;", "\u2968": "&ruluhar;", "\u211E": "&rx;", "\u015B": "&sacute;", "\u2AB4": "&scE;", "\u2AB8": "&succapprox;", "\u0161": "&scaron;", "\u015F": "&scedil;", "\u015D": "&scirc;", "\u2AB6": "&succneqq;", "\u2ABA": "&succnapprox;", "\u22E9": "&succnsim;", "\u2A13": "&scpolint;", "\u0441": "&scy;", "\u22C5": "&sdot;", "\u2A66": "&sdote;", "\u21D8": "&seArr;", "\xA7": "&sect;", ";": "&semi;", "\u2929": "&tosa;", "\u2736": "&sext;", "\u{1D530}": "&sfr;", "\u266F": "&sharp;", "\u0449": "&shchcy;", "\u0448": "&shcy;", "\xAD": "&shy;", "\u03C3": "&sigma;", "\u03C2": "&varsigma;", "\u2A6A": "&simdot;", "\u2A9E": "&simg;", "\u2AA0": "&simgE;", "\u2A9D": "&siml;", "\u2A9F": "&simlE;", "\u2246": "&simne;", "\u2A24": "&simplus;", "\u2972": "&simrarr;", "\u2A33": "&smashp;", "\u29E4": "&smeparsl;", "\u2323": "&ssmile;", "\u2AAA": "&smt;", "\u2AAC": "&smte;", "\u2AAC\uFE00": "&smtes;", "\u044C": "&softcy;", "/": "&sol;", "\u29C4": "&solb;", "\u233F": "&solbar;", "\u{1D564}": "&sopf;", "\u2660": "&spadesuit;", "\u2293\uFE00": "&sqcaps;", "\u2294\uFE00": "&sqcups;", "\u{1D4C8}": "&sscr;", "\u2606": "&star;", "\u2282": "&subset;", "\u2AC5": "&subseteqq;", "\u2ABD": "&subdot;", "\u2AC3": "&subedot;", "\u2AC1": "&submult;", "\u2ACB": "&subsetneqq;", "\u228A": "&subsetneq;", "\u2ABF": "&subplus;", "\u2979": "&subrarr;", "\u2AC7": "&subsim;", "\u2AD5": "&subsub;", "\u2AD3": "&subsup;", "\u266A": "&sung;", "\xB9": "&sup1;", "\xB2": "&sup2;", "\xB3": "&sup3;", "\u2AC6": "&supseteqq;", "\u2ABE": "&supdot;", "\u2AD8": "&supdsub;", "\u2AC4": "&supedot;", "\u27C9": "&suphsol;", "\u2AD7": "&suphsub;", "\u297B": "&suplarr;", "\u2AC2": "&supmult;", "\u2ACC": "&supsetneqq;", "\u228B": "&supsetneq;", "\u2AC0": "&supplus;", "\u2AC8": "&supsim;", "\u2AD4": "&supsub;", "\u2AD6": "&supsup;", "\u21D9": "&swArr;", "\u292A": "&swnwar;", "\xDF": "&szlig;", "\u2316": "&target;", "\u03C4": "&tau;", "\u0165": "&tcaron;", "\u0163": "&tcedil;", "\u0442": "&tcy;", "\u2315": "&telrec;", "\u{1D531}": "&tfr;", "\u03B8": "&theta;", "\u03D1": "&vartheta;", "\xFE": "&thorn;", "\xD7": "&times;", "\u2A31": "&timesbar;", "\u2A30": "&timesd;", "\u2336": "&topbot;", "\u2AF1": "&topcir;", "\u{1D565}": "&topf;", "\u2ADA": "&topfork;", "\u2034": "&tprime;", "\u25B5": "&utri;", "\u225C": "&trie;", "\u25EC": "&tridot;", "\u2A3A": "&triminus;", "\u2A39": "&triplus;", "\u29CD": "&trisb;", "\u2A3B": "&tritime;", "\u23E2": "&trpezium;", "\u{1D4C9}": "&tscr;", "\u0446": "&tscy;", "\u045B": "&tshcy;", "\u0167": "&tstrok;", "\u2963": "&uHar;", "\xFA": "&uacute;", "\u045E": "&ubrcy;", "\u016D": "&ubreve;", "\xFB": "&ucirc;", "\u0443": "&ucy;", "\u0171": "&udblac;", "\u297E": "&ufisht;", "\u{1D532}": "&ufr;", "\xF9": "&ugrave;", "\u2580": "&uhblk;", "\u231C": "&ulcorner;", "\u230F": "&ulcrop;", "\u25F8": "&ultri;", "\u016B": "&umacr;", "\u0173": "&uogon;", "\u{1D566}": "&uopf;", "\u03C5": "&upsilon;", "\u21C8": "&uuarr;", "\u231D": "&urcorner;", "\u230E": "&urcrop;", "\u016F": "&uring;", "\u25F9": "&urtri;", "\u{1D4CA}": "&uscr;", "\u22F0": "&utdot;", "\u0169": "&utilde;", "\xFC": "&uuml;", "\u29A7": "&uwangle;", "\u2AE8": "&vBar;", "\u2AE9": "&vBarv;", "\u299C": "&vangrt;", "\u228A\uFE00": "&vsubne;", "\u2ACB\uFE00": "&vsubnE;", "\u228B\uFE00": "&vsupne;", "\u2ACC\uFE00": "&vsupnE;", "\u0432": "&vcy;", "\u22BB": "&veebar;", "\u225A": "&veeeq;", "\u22EE": "&vellip;", "\u{1D533}": "&vfr;", "\u{1D567}": "&vopf;", "\u{1D4CB}": "&vscr;", "\u299A": "&vzigzag;", "\u0175": "&wcirc;", "\u2A5F": "&wedbar;", "\u2259": "&wedgeq;", "\u2118": "&wp;", "\u{1D534}": "&wfr;", "\u{1D568}": "&wopf;", "\u{1D4CC}": "&wscr;", "\u{1D535}": "&xfr;", "\u03BE": "&xi;", "\u22FB": "&xnis;", "\u{1D569}": "&xopf;", "\u{1D4CD}": "&xscr;", "\xFD": "&yacute;", "\u044F": "&yacy;", "\u0177": "&ycirc;", "\u044B": "&ycy;", "\xA5": "&yen;", "\u{1D536}": "&yfr;", "\u0457": "&yicy;", "\u{1D56A}": "&yopf;", "\u{1D4CE}": "&yscr;", "\u044E": "&yucy;", "\xFF": "&yuml;", "\u017A": "&zacute;", "\u017E": "&zcaron;", "\u0437": "&zcy;", "\u017C": "&zdot;", "\u03B6": "&zeta;", "\u{1D537}": "&zfr;", "\u0436": "&zhcy;", "\u21DD": "&zigrarr;", "\u{1D56B}": "&zopf;", "\u{1D4CF}": "&zscr;", "\u200D": "&zwj;", "\u200C": "&zwnj;" } } };
    }
  });

  // node_modules/html-entities/lib/numeric-unicode-map.js
  var require_numeric_unicode_map = __commonJS({
    "node_modules/html-entities/lib/numeric-unicode-map.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.numericUnicodeMap = { 0: 65533, 128: 8364, 130: 8218, 131: 402, 132: 8222, 133: 8230, 134: 8224, 135: 8225, 136: 710, 137: 8240, 138: 352, 139: 8249, 140: 338, 142: 381, 145: 8216, 146: 8217, 147: 8220, 148: 8221, 149: 8226, 150: 8211, 151: 8212, 152: 732, 153: 8482, 154: 353, 155: 8250, 156: 339, 158: 382, 159: 376 };
    }
  });

  // node_modules/html-entities/lib/surrogate-pairs.js
  var require_surrogate_pairs = __commonJS({
    "node_modules/html-entities/lib/surrogate-pairs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
        return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
      };
      exports.getCodePoint = String.prototype.codePointAt ? function(input, position) {
        return input.codePointAt(position);
      } : function(input, position) {
        return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
      };
      exports.highSurrogateFrom = 55296;
      exports.highSurrogateTo = 56319;
    }
  });

  // node_modules/html-entities/lib/index.js
  var require_lib = __commonJS({
    "node_modules/html-entities/lib/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var named_references_1 = require_named_references();
      var numeric_unicode_map_1 = require_numeric_unicode_map();
      var surrogate_pairs_1 = require_surrogate_pairs();
      var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
      function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {
        macroRegExp.lastIndex = 0;
        var replaceMatch = macroRegExp.exec(macroText);
        var replaceResult;
        if (replaceMatch) {
          replaceResult = "";
          var replaceLastIndex = 0;
          do {
            if (replaceLastIndex !== replaceMatch.index) {
              replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index);
            }
            var replaceInput = replaceMatch[0];
            replaceResult += macroReplacer(replaceInput);
            replaceLastIndex = replaceMatch.index + replaceInput.length;
          } while (replaceMatch = macroRegExp.exec(macroText));
          if (replaceLastIndex !== macroText.length) {
            replaceResult += macroText.substring(replaceLastIndex);
          }
        } else {
          replaceResult = macroText;
        }
        return replaceResult;
      }
      var encodeRegExps = { specialChars: /[<>'"&]/g, nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g };
      var defaultEncodeOptions = { mode: "specialChars", level: "all", numeric: "decimal" };
      function encode2(text, _a) {
        var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? "specialChars" : _c, _d = _b.numeric, numeric = _d === void 0 ? "decimal" : _d, _e = _b.level, level = _e === void 0 ? "all" : _e;
        if (!text) {
          return "";
        }
        var encodeRegExp = encodeRegExps[mode];
        var references = allNamedReferences[level].characters;
        var isHex = numeric === "hexadecimal";
        return replaceUsingRegExp(text, encodeRegExp, function(input) {
          var result2 = references[input];
          if (!result2) {
            var code = input.length > 1 ? surrogate_pairs_1.getCodePoint(input, 0) : input.charCodeAt(0);
            result2 = (isHex ? "&#x" + code.toString(16) : "&#" + code) + ";";
          }
          return result2;
        });
      }
      exports.encode = encode2;
      var defaultDecodeOptions = { scope: "body", level: "all" };
      var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
      var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
      var baseDecodeRegExps = { xml: { strict, attribute, body: named_references_1.bodyRegExps.xml }, html4: { strict, attribute, body: named_references_1.bodyRegExps.html4 }, html5: { strict, attribute, body: named_references_1.bodyRegExps.html5 } };
      var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
      var fromCharCode = String.fromCharCode;
      var outOfBoundsChar = fromCharCode(65533);
      var defaultDecodeEntityOptions = { level: "all" };
      function getDecodedEntity(entity, references, isAttribute, isStrict) {
        var decodeResult = entity;
        var decodeEntityLastChar = entity[entity.length - 1];
        if (isAttribute && decodeEntityLastChar === "=") {
          decodeResult = entity;
        } else if (isStrict && decodeEntityLastChar !== ";") {
          decodeResult = entity;
        } else {
          var decodeResultByReference = references[entity];
          if (decodeResultByReference) {
            decodeResult = decodeResultByReference;
          } else if (entity[0] === "&" && entity[1] === "#") {
            var decodeSecondChar = entity[2];
            var decodeCode = decodeSecondChar == "x" || decodeSecondChar == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
            decodeResult = decodeCode >= 1114111 ? outOfBoundsChar : decodeCode > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode] || decodeCode);
          }
        }
        return decodeResult;
      }
      function decodeEntity(entity, _a) {
        var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? "all" : _b;
        if (!entity) {
          return "";
        }
        return getDecodedEntity(entity, allNamedReferences[level].entities, false, false);
      }
      exports.decodeEntity = decodeEntity;
      function decode2(text, _a) {
        var _b = _a === void 0 ? defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? "all" : _c, _d = _b.scope, scope = _d === void 0 ? level === "xml" ? "strict" : "body" : _d;
        if (!text) {
          return "";
        }
        var decodeRegExp = decodeRegExps[level][scope];
        var references = allNamedReferences[level].entities;
        var isAttribute = scope === "attribute";
        var isStrict = scope === "strict";
        return replaceUsingRegExp(text, decodeRegExp, function(entity) {
          return getDecodedEntity(entity, references, isAttribute, isStrict);
        });
      }
      exports.decode = decode2;
    }
  });

  // node_modules/underscore/modules/index.js
  var modules_exports = {};
  __export(modules_exports, {
    VERSION: () => VERSION,
    after: () => after,
    all: () => every,
    allKeys: () => allKeys,
    any: () => some,
    assign: () => extendOwn_default,
    before: () => before,
    bind: () => bind_default,
    bindAll: () => bindAll_default,
    chain: () => chain,
    chunk: () => chunk,
    clone: () => clone,
    collect: () => map,
    compact: () => compact,
    compose: () => compose,
    constant: () => constant,
    contains: () => contains,
    countBy: () => countBy_default,
    create: () => create,
    debounce: () => debounce,
    default: () => underscore_array_methods_default,
    defaults: () => defaults_default,
    defer: () => defer_default,
    delay: () => delay_default,
    detect: () => find,
    difference: () => difference_default,
    drop: () => rest,
    each: () => each,
    escape: () => escape_default,
    every: () => every,
    extend: () => extend_default,
    extendOwn: () => extendOwn_default,
    filter: () => filter,
    find: () => find,
    findIndex: () => findIndex_default,
    findKey: () => findKey,
    findLastIndex: () => findLastIndex_default,
    findWhere: () => findWhere,
    first: () => first,
    flatten: () => flatten2,
    foldl: () => reduce_default,
    foldr: () => reduceRight_default,
    forEach: () => each,
    functions: () => functions,
    get: () => get,
    groupBy: () => groupBy_default,
    has: () => has2,
    head: () => first,
    identity: () => identity,
    include: () => contains,
    includes: () => contains,
    indexBy: () => indexBy_default,
    indexOf: () => indexOf_default,
    initial: () => initial,
    inject: () => reduce_default,
    intersection: () => intersection,
    invert: () => invert,
    invoke: () => invoke_default,
    isArguments: () => isArguments_default,
    isArray: () => isArray_default,
    isArrayBuffer: () => isArrayBuffer_default,
    isBoolean: () => isBoolean,
    isDataView: () => isDataView_default,
    isDate: () => isDate_default,
    isElement: () => isElement,
    isEmpty: () => isEmpty,
    isEqual: () => isEqual,
    isError: () => isError_default,
    isFinite: () => isFinite2,
    isFunction: () => isFunction_default,
    isMap: () => isMap_default,
    isMatch: () => isMatch,
    isNaN: () => isNaN2,
    isNull: () => isNull,
    isNumber: () => isNumber_default,
    isObject: () => isObject,
    isRegExp: () => isRegExp_default,
    isSet: () => isSet_default,
    isString: () => isString_default,
    isSymbol: () => isSymbol_default,
    isTypedArray: () => isTypedArray_default,
    isUndefined: () => isUndefined,
    isWeakMap: () => isWeakMap_default,
    isWeakSet: () => isWeakSet_default,
    iteratee: () => iteratee,
    keys: () => keys,
    last: () => last,
    lastIndexOf: () => lastIndexOf_default,
    map: () => map,
    mapObject: () => mapObject,
    matcher: () => matcher,
    matches: () => matcher,
    max: () => max,
    memoize: () => memoize,
    methods: () => functions,
    min: () => min,
    mixin: () => mixin,
    negate: () => negate,
    noop: () => noop,
    now: () => now_default,
    object: () => object,
    omit: () => omit_default,
    once: () => once_default,
    pairs: () => pairs,
    partial: () => partial_default,
    partition: () => partition_default,
    pick: () => pick_default,
    pluck: () => pluck,
    property: () => property,
    propertyOf: () => propertyOf,
    random: () => random,
    range: () => range,
    reduce: () => reduce_default,
    reduceRight: () => reduceRight_default,
    reject: () => reject,
    rest: () => rest,
    restArguments: () => restArguments,
    result: () => result,
    sample: () => sample,
    select: () => filter,
    shuffle: () => shuffle,
    size: () => size,
    some: () => some,
    sortBy: () => sortBy,
    sortedIndex: () => sortedIndex,
    tail: () => rest,
    take: () => first,
    tap: () => tap,
    template: () => template,
    templateSettings: () => templateSettings_default,
    throttle: () => throttle,
    times: () => times,
    toArray: () => toArray,
    toPath: () => toPath,
    transpose: () => unzip,
    unescape: () => unescape_default,
    union: () => union_default,
    uniq: () => uniq,
    unique: () => uniq,
    uniqueId: () => uniqueId,
    unzip: () => unzip,
    values: () => values,
    where: () => where,
    without: () => without_default,
    wrap: () => wrap,
    zip: () => zip_default
  });

  // node_modules/underscore/modules/_setup.js
  var VERSION = "1.13.6";
  var root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
  var ArrayProto = Array.prototype;
  var ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
  var push = ArrayProto.push;
  var slice = ArrayProto.slice;
  var toString = ObjProto.toString;
  var hasOwnProperty = ObjProto.hasOwnProperty;
  var supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
  var supportsDataView = typeof DataView !== "undefined";
  var nativeIsArray = Array.isArray;
  var nativeKeys = Object.keys;
  var nativeCreate = Object.create;
  var nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
  var _isNaN = isNaN;
  var _isFinite = isFinite;
  var hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
  var nonEnumerableProps = [
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString"
  ];
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

  // node_modules/underscore/modules/restArguments.js
  function restArguments(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
      for (; index < length; index++) {
        rest2[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0:
          return func.call(this, rest2);
        case 1:
          return func.call(this, arguments[0], rest2);
        case 2:
          return func.call(this, arguments[0], arguments[1], rest2);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest2;
      return func.apply(this, args);
    };
  }

  // node_modules/underscore/modules/isObject.js
  function isObject(obj) {
    var type = typeof obj;
    return type === "function" || type === "object" && !!obj;
  }

  // node_modules/underscore/modules/isNull.js
  function isNull(obj) {
    return obj === null;
  }

  // node_modules/underscore/modules/isUndefined.js
  function isUndefined(obj) {
    return obj === void 0;
  }

  // node_modules/underscore/modules/isBoolean.js
  function isBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
  }

  // node_modules/underscore/modules/isElement.js
  function isElement(obj) {
    return !!(obj && obj.nodeType === 1);
  }

  // node_modules/underscore/modules/_tagTester.js
  function tagTester(name) {
    var tag = "[object " + name + "]";
    return function(obj) {
      return toString.call(obj) === tag;
    };
  }

  // node_modules/underscore/modules/isString.js
  var isString_default = tagTester("String");

  // node_modules/underscore/modules/isNumber.js
  var isNumber_default = tagTester("Number");

  // node_modules/underscore/modules/isDate.js
  var isDate_default = tagTester("Date");

  // node_modules/underscore/modules/isRegExp.js
  var isRegExp_default = tagTester("RegExp");

  // node_modules/underscore/modules/isError.js
  var isError_default = tagTester("Error");

  // node_modules/underscore/modules/isSymbol.js
  var isSymbol_default = tagTester("Symbol");

  // node_modules/underscore/modules/isArrayBuffer.js
  var isArrayBuffer_default = tagTester("ArrayBuffer");

  // node_modules/underscore/modules/isFunction.js
  var isFunction = tagTester("Function");
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
    isFunction = function(obj) {
      return typeof obj == "function" || false;
    };
  }
  var isFunction_default = isFunction;

  // node_modules/underscore/modules/_hasObjectTag.js
  var hasObjectTag_default = tagTester("Object");

  // node_modules/underscore/modules/_stringTagBug.js
  var hasStringTagBug = supportsDataView && hasObjectTag_default(new DataView(new ArrayBuffer(8)));
  var isIE11 = typeof Map !== "undefined" && hasObjectTag_default(/* @__PURE__ */ new Map());

  // node_modules/underscore/modules/isDataView.js
  var isDataView = tagTester("DataView");
  function ie10IsDataView(obj) {
    return obj != null && isFunction_default(obj.getInt8) && isArrayBuffer_default(obj.buffer);
  }
  var isDataView_default = hasStringTagBug ? ie10IsDataView : isDataView;

  // node_modules/underscore/modules/isArray.js
  var isArray_default = nativeIsArray || tagTester("Array");

  // node_modules/underscore/modules/_has.js
  function has(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }

  // node_modules/underscore/modules/isArguments.js
  var isArguments = tagTester("Arguments");
  (function() {
    if (!isArguments(arguments)) {
      isArguments = function(obj) {
        return has(obj, "callee");
      };
    }
  })();
  var isArguments_default = isArguments;

  // node_modules/underscore/modules/isFinite.js
  function isFinite2(obj) {
    return !isSymbol_default(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
  }

  // node_modules/underscore/modules/isNaN.js
  function isNaN2(obj) {
    return isNumber_default(obj) && _isNaN(obj);
  }

  // node_modules/underscore/modules/constant.js
  function constant(value) {
    return function() {
      return value;
    };
  }

  // node_modules/underscore/modules/_createSizePropertyCheck.js
  function createSizePropertyCheck(getSizeProperty) {
    return function(collection) {
      var sizeProperty = getSizeProperty(collection);
      return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
    };
  }

  // node_modules/underscore/modules/_shallowProperty.js
  function shallowProperty(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  }

  // node_modules/underscore/modules/_getByteLength.js
  var getByteLength_default = shallowProperty("byteLength");

  // node_modules/underscore/modules/_isBufferLike.js
  var isBufferLike_default = createSizePropertyCheck(getByteLength_default);

  // node_modules/underscore/modules/isTypedArray.js
  var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
  function isTypedArray(obj) {
    return nativeIsView ? nativeIsView(obj) && !isDataView_default(obj) : isBufferLike_default(obj) && typedArrayPattern.test(toString.call(obj));
  }
  var isTypedArray_default = supportsArrayBuffer ? isTypedArray : constant(false);

  // node_modules/underscore/modules/_getLength.js
  var getLength_default = shallowProperty("length");

  // node_modules/underscore/modules/_collectNonEnumProps.js
  function emulatedSet(keys2) {
    var hash = {};
    for (var l = keys2.length, i = 0; i < l; ++i)
      hash[keys2[i]] = true;
    return {
      contains: function(key) {
        return hash[key] === true;
      },
      push: function(key) {
        hash[key] = true;
        return keys2.push(key);
      }
    };
  }
  function collectNonEnumProps(obj, keys2) {
    keys2 = emulatedSet(keys2);
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = isFunction_default(constructor) && constructor.prototype || ObjProto;
    var prop = "constructor";
    if (has(obj, prop) && !keys2.contains(prop))
      keys2.push(prop);
    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
        keys2.push(prop);
      }
    }
  }

  // node_modules/underscore/modules/keys.js
  function keys(obj) {
    if (!isObject(obj))
      return [];
    if (nativeKeys)
      return nativeKeys(obj);
    var keys2 = [];
    for (var key in obj)
      if (has(obj, key))
        keys2.push(key);
    if (hasEnumBug)
      collectNonEnumProps(obj, keys2);
    return keys2;
  }

  // node_modules/underscore/modules/isEmpty.js
  function isEmpty(obj) {
    if (obj == null)
      return true;
    var length = getLength_default(obj);
    if (typeof length == "number" && (isArray_default(obj) || isString_default(obj) || isArguments_default(obj)))
      return length === 0;
    return getLength_default(keys(obj)) === 0;
  }

  // node_modules/underscore/modules/isMatch.js
  function isMatch(object2, attrs) {
    var _keys = keys(attrs), length = _keys.length;
    if (object2 == null)
      return !length;
    var obj = Object(object2);
    for (var i = 0; i < length; i++) {
      var key = _keys[i];
      if (attrs[key] !== obj[key] || !(key in obj))
        return false;
    }
    return true;
  }

  // node_modules/underscore/modules/underscore.js
  function _(obj) {
    if (obj instanceof _)
      return obj;
    if (!(this instanceof _))
      return new _(obj);
    this._wrapped = obj;
  }
  _.VERSION = VERSION;
  _.prototype.value = function() {
    return this._wrapped;
  };
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // node_modules/underscore/modules/_toBufferView.js
  function toBufferView(bufferSource) {
    return new Uint8Array(
      bufferSource.buffer || bufferSource,
      bufferSource.byteOffset || 0,
      getByteLength_default(bufferSource)
    );
  }

  // node_modules/underscore/modules/isEqual.js
  var tagDataView = "[object DataView]";
  function eq(a, b, aStack, bStack) {
    if (a === b)
      return a !== 0 || 1 / a === 1 / b;
    if (a == null || b == null)
      return false;
    if (a !== a)
      return b !== b;
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
      return false;
    return deepEq(a, b, aStack, bStack);
  }
  function deepEq(a, b, aStack, bStack) {
    if (a instanceof _)
      a = a._wrapped;
    if (b instanceof _)
      b = b._wrapped;
    var className = toString.call(a);
    if (className !== toString.call(b))
      return false;
    if (hasStringTagBug && className == "[object Object]" && isDataView_default(a)) {
      if (!isDataView_default(b))
        return false;
      className = tagDataView;
    }
    switch (className) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a)
          return +b !== +b;
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
      case "[object Symbol]":
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
      case "[object ArrayBuffer]":
      case tagDataView:
        return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
    }
    var areArrays = className === "[object Array]";
    if (!areArrays && isTypedArray_default(a)) {
      var byteLength = getByteLength_default(a);
      if (byteLength !== getByteLength_default(b))
        return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
        return true;
      areArrays = true;
    }
    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object")
        return false;
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(isFunction_default(aCtor) && aCtor instanceof aCtor && isFunction_default(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
        return false;
      }
    }
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a)
        return bStack[length] === b;
    }
    aStack.push(a);
    bStack.push(b);
    if (areArrays) {
      length = a.length;
      if (length !== b.length)
        return false;
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack))
          return false;
      }
    } else {
      var _keys = keys(a), key;
      length = _keys.length;
      if (keys(b).length !== length)
        return false;
      while (length--) {
        key = _keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack)))
          return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  }
  function isEqual(a, b) {
    return eq(a, b);
  }

  // node_modules/underscore/modules/allKeys.js
  function allKeys(obj) {
    if (!isObject(obj))
      return [];
    var keys2 = [];
    for (var key in obj)
      keys2.push(key);
    if (hasEnumBug)
      collectNonEnumProps(obj, keys2);
    return keys2;
  }

  // node_modules/underscore/modules/_methodFingerprint.js
  function ie11fingerprint(methods) {
    var length = getLength_default(methods);
    return function(obj) {
      if (obj == null)
        return false;
      var keys2 = allKeys(obj);
      if (getLength_default(keys2))
        return false;
      for (var i = 0; i < length; i++) {
        if (!isFunction_default(obj[methods[i]]))
          return false;
      }
      return methods !== weakMapMethods || !isFunction_default(obj[forEachName]);
    };
  }
  var forEachName = "forEach";
  var hasName = "has";
  var commonInit = ["clear", "delete"];
  var mapTail = ["get", hasName, "set"];
  var mapMethods = commonInit.concat(forEachName, mapTail);
  var weakMapMethods = commonInit.concat(mapTail);
  var setMethods = ["add"].concat(commonInit, forEachName, hasName);

  // node_modules/underscore/modules/isMap.js
  var isMap_default = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");

  // node_modules/underscore/modules/isWeakMap.js
  var isWeakMap_default = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");

  // node_modules/underscore/modules/isSet.js
  var isSet_default = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");

  // node_modules/underscore/modules/isWeakSet.js
  var isWeakSet_default = tagTester("WeakSet");

  // node_modules/underscore/modules/values.js
  function values(obj) {
    var _keys = keys(obj);
    var length = _keys.length;
    var values2 = Array(length);
    for (var i = 0; i < length; i++) {
      values2[i] = obj[_keys[i]];
    }
    return values2;
  }

  // node_modules/underscore/modules/pairs.js
  function pairs(obj) {
    var _keys = keys(obj);
    var length = _keys.length;
    var pairs2 = Array(length);
    for (var i = 0; i < length; i++) {
      pairs2[i] = [_keys[i], obj[_keys[i]]];
    }
    return pairs2;
  }

  // node_modules/underscore/modules/invert.js
  function invert(obj) {
    var result2 = {};
    var _keys = keys(obj);
    for (var i = 0, length = _keys.length; i < length; i++) {
      result2[obj[_keys[i]]] = _keys[i];
    }
    return result2;
  }

  // node_modules/underscore/modules/functions.js
  function functions(obj) {
    var names = [];
    for (var key in obj) {
      if (isFunction_default(obj[key]))
        names.push(key);
    }
    return names.sort();
  }

  // node_modules/underscore/modules/_createAssigner.js
  function createAssigner(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults)
        obj = Object(obj);
      if (length < 2 || obj == null)
        return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
        for (var i = 0; i < l; i++) {
          var key = keys2[i];
          if (!defaults || obj[key] === void 0)
            obj[key] = source[key];
        }
      }
      return obj;
    };
  }

  // node_modules/underscore/modules/extend.js
  var extend_default = createAssigner(allKeys);

  // node_modules/underscore/modules/extendOwn.js
  var extendOwn_default = createAssigner(keys);

  // node_modules/underscore/modules/defaults.js
  var defaults_default = createAssigner(allKeys, true);

  // node_modules/underscore/modules/_baseCreate.js
  function ctor() {
    return function() {
    };
  }
  function baseCreate(prototype) {
    if (!isObject(prototype))
      return {};
    if (nativeCreate)
      return nativeCreate(prototype);
    var Ctor = ctor();
    Ctor.prototype = prototype;
    var result2 = new Ctor();
    Ctor.prototype = null;
    return result2;
  }

  // node_modules/underscore/modules/create.js
  function create(prototype, props) {
    var result2 = baseCreate(prototype);
    if (props)
      extendOwn_default(result2, props);
    return result2;
  }

  // node_modules/underscore/modules/clone.js
  function clone(obj) {
    if (!isObject(obj))
      return obj;
    return isArray_default(obj) ? obj.slice() : extend_default({}, obj);
  }

  // node_modules/underscore/modules/tap.js
  function tap(obj, interceptor) {
    interceptor(obj);
    return obj;
  }

  // node_modules/underscore/modules/toPath.js
  function toPath(path) {
    return isArray_default(path) ? path : [path];
  }
  _.toPath = toPath;

  // node_modules/underscore/modules/_toPath.js
  function toPath2(path) {
    return _.toPath(path);
  }

  // node_modules/underscore/modules/_deepGet.js
  function deepGet(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null)
        return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  }

  // node_modules/underscore/modules/get.js
  function get(object2, path, defaultValue) {
    var value = deepGet(object2, toPath2(path));
    return isUndefined(value) ? defaultValue : value;
  }

  // node_modules/underscore/modules/has.js
  function has2(obj, path) {
    path = toPath2(path);
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (!has(obj, key))
        return false;
      obj = obj[key];
    }
    return !!length;
  }

  // node_modules/underscore/modules/identity.js
  function identity(value) {
    return value;
  }

  // node_modules/underscore/modules/matcher.js
  function matcher(attrs) {
    attrs = extendOwn_default({}, attrs);
    return function(obj) {
      return isMatch(obj, attrs);
    };
  }

  // node_modules/underscore/modules/property.js
  function property(path) {
    path = toPath2(path);
    return function(obj) {
      return deepGet(obj, path);
    };
  }

  // node_modules/underscore/modules/_optimizeCb.js
  function optimizeCb(func, context, argCount) {
    if (context === void 0)
      return func;
    switch (argCount == null ? 3 : argCount) {
      case 1:
        return function(value) {
          return func.call(context, value);
        };
      case 3:
        return function(value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function(accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }
    return function() {
      return func.apply(context, arguments);
    };
  }

  // node_modules/underscore/modules/_baseIteratee.js
  function baseIteratee(value, context, argCount) {
    if (value == null)
      return identity;
    if (isFunction_default(value))
      return optimizeCb(value, context, argCount);
    if (isObject(value) && !isArray_default(value))
      return matcher(value);
    return property(value);
  }

  // node_modules/underscore/modules/iteratee.js
  function iteratee(value, context) {
    return baseIteratee(value, context, Infinity);
  }
  _.iteratee = iteratee;

  // node_modules/underscore/modules/_cb.js
  function cb(value, context, argCount) {
    if (_.iteratee !== iteratee)
      return _.iteratee(value, context);
    return baseIteratee(value, context, argCount);
  }

  // node_modules/underscore/modules/mapObject.js
  function mapObject(obj, iteratee2, context) {
    iteratee2 = cb(iteratee2, context);
    var _keys = keys(obj), length = _keys.length, results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = _keys[index];
      results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
    }
    return results;
  }

  // node_modules/underscore/modules/noop.js
  function noop() {
  }

  // node_modules/underscore/modules/propertyOf.js
  function propertyOf(obj) {
    if (obj == null)
      return noop;
    return function(path) {
      return get(obj, path);
    };
  }

  // node_modules/underscore/modules/times.js
  function times(n, iteratee2, context) {
    var accum = Array(Math.max(0, n));
    iteratee2 = optimizeCb(iteratee2, context, 1);
    for (var i = 0; i < n; i++)
      accum[i] = iteratee2(i);
    return accum;
  }

  // node_modules/underscore/modules/random.js
  function random(min2, max2) {
    if (max2 == null) {
      max2 = min2;
      min2 = 0;
    }
    return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
  }

  // node_modules/underscore/modules/now.js
  var now_default = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };

  // node_modules/underscore/modules/_createEscaper.js
  function createEscaper(map2) {
    var escaper = function(match) {
      return map2[match];
    };
    var source = "(?:" + keys(map2).join("|") + ")";
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, "g");
    return function(string) {
      string = string == null ? "" : "" + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  }

  // node_modules/underscore/modules/_escapeMap.js
  var escapeMap_default = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  // node_modules/underscore/modules/escape.js
  var escape_default = createEscaper(escapeMap_default);

  // node_modules/underscore/modules/_unescapeMap.js
  var unescapeMap_default = invert(escapeMap_default);

  // node_modules/underscore/modules/unescape.js
  var unescape_default = createEscaper(unescapeMap_default);

  // node_modules/underscore/modules/templateSettings.js
  var templateSettings_default = _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // node_modules/underscore/modules/template.js
  var noMatch = /(.)^/;
  var escapes = {
    "'": "'",
    "\\": "\\",
    "\r": "r",
    "\n": "n",
    "\u2028": "u2028",
    "\u2029": "u2029"
  };
  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
  function escapeChar(match) {
    return "\\" + escapes[match];
  }
  var bareIdentifier = /^\s*(\w|\$)+\s*$/;
  function template(text, settings, oldSettings) {
    if (!settings && oldSettings)
      settings = oldSettings;
    settings = defaults_default({}, settings, _.templateSettings);
    var matcher2 = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join("|") + "|$", "g");
    var index = 0;
    var source = "__p+='";
    text.replace(matcher2, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;
      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      return match;
    });
    source += "';\n";
    var argument = settings.variable;
    if (argument) {
      if (!bareIdentifier.test(argument))
        throw new Error(
          "variable is not a bare identifier: " + argument
        );
    } else {
      source = "with(obj||{}){\n" + source + "}\n";
      argument = "obj";
    }
    source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
    var render;
    try {
      render = new Function(argument, "_", source);
    } catch (e) {
      e.source = source;
      throw e;
    }
    var template2 = function(data) {
      return render.call(this, data, _);
    };
    template2.source = "function(" + argument + "){\n" + source + "}";
    return template2;
  }

  // node_modules/underscore/modules/result.js
  function result(obj, path, fallback) {
    path = toPath2(path);
    var length = path.length;
    if (!length) {
      return isFunction_default(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length;
      }
      obj = isFunction_default(prop) ? prop.call(obj) : prop;
    }
    return obj;
  }

  // node_modules/underscore/modules/uniqueId.js
  var idCounter = 0;
  function uniqueId(prefix) {
    var id = ++idCounter + "";
    return prefix ? prefix + id : id;
  }

  // node_modules/underscore/modules/chain.js
  function chain(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  }

  // node_modules/underscore/modules/_executeBound.js
  function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc))
      return sourceFunc.apply(context, args);
    var self2 = baseCreate(sourceFunc.prototype);
    var result2 = sourceFunc.apply(self2, args);
    if (isObject(result2))
      return result2;
    return self2;
  }

  // node_modules/underscore/modules/partial.js
  var partial = restArguments(function(func, boundArgs) {
    var placeholder = partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length)
        args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });
  partial.placeholder = _;
  var partial_default = partial;

  // node_modules/underscore/modules/bind.js
  var bind_default = restArguments(function(func, context, args) {
    if (!isFunction_default(func))
      throw new TypeError("Bind must be called on a function");
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // node_modules/underscore/modules/_isArrayLike.js
  var isArrayLike_default = createSizePropertyCheck(getLength_default);

  // node_modules/underscore/modules/_flatten.js
  function flatten(input, depth, strict, output) {
    output = output || [];
    if (!depth && depth !== 0) {
      depth = Infinity;
    } else if (depth <= 0) {
      return output.concat(input);
    }
    var idx = output.length;
    for (var i = 0, length = getLength_default(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike_default(value) && (isArray_default(value) || isArguments_default(value))) {
        if (depth > 1) {
          flatten(value, depth - 1, strict, output);
          idx = output.length;
        } else {
          var j = 0, len = value.length;
          while (j < len)
            output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  }

  // node_modules/underscore/modules/bindAll.js
  var bindAll_default = restArguments(function(obj, keys2) {
    keys2 = flatten(keys2, false, false);
    var index = keys2.length;
    if (index < 1)
      throw new Error("bindAll must be passed function names");
    while (index--) {
      var key = keys2[index];
      obj[key] = bind_default(obj[key], obj);
    }
    return obj;
  });

  // node_modules/underscore/modules/memoize.js
  function memoize(func, hasher) {
    var memoize2 = function(key) {
      var cache = memoize2.cache;
      var address = "" + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address))
        cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize2.cache = {};
    return memoize2;
  }

  // node_modules/underscore/modules/delay.js
  var delay_default = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // node_modules/underscore/modules/defer.js
  var defer_default = partial_default(delay_default, _, 1);

  // node_modules/underscore/modules/throttle.js
  function throttle(func, wait, options) {
    var timeout, context, args, result2;
    var previous = 0;
    if (!options)
      options = {};
    var later = function() {
      previous = options.leading === false ? 0 : now_default();
      timeout = null;
      result2 = func.apply(context, args);
      if (!timeout)
        context = args = null;
    };
    var throttled = function() {
      var _now = now_default();
      if (!previous && options.leading === false)
        previous = _now;
      var remaining = wait - (_now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = _now;
        result2 = func.apply(context, args);
        if (!timeout)
          context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result2;
    };
    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };
    return throttled;
  }

  // node_modules/underscore/modules/debounce.js
  function debounce(func, wait, immediate) {
    var timeout, previous, args, result2, context;
    var later = function() {
      var passed = now_default() - previous;
      if (wait > passed) {
        timeout = setTimeout(later, wait - passed);
      } else {
        timeout = null;
        if (!immediate)
          result2 = func.apply(context, args);
        if (!timeout)
          args = context = null;
      }
    };
    var debounced = restArguments(function(_args) {
      context = this;
      args = _args;
      previous = now_default();
      if (!timeout) {
        timeout = setTimeout(later, wait);
        if (immediate)
          result2 = func.apply(context, args);
      }
      return result2;
    });
    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = args = context = null;
    };
    return debounced;
  }

  // node_modules/underscore/modules/wrap.js
  function wrap(func, wrapper) {
    return partial_default(wrapper, func);
  }

  // node_modules/underscore/modules/negate.js
  function negate(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  }

  // node_modules/underscore/modules/compose.js
  function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result2 = args[start].apply(this, arguments);
      while (i--)
        result2 = args[i].call(this, result2);
      return result2;
    };
  }

  // node_modules/underscore/modules/after.js
  function after(times2, func) {
    return function() {
      if (--times2 < 1) {
        return func.apply(this, arguments);
      }
    };
  }

  // node_modules/underscore/modules/before.js
  function before(times2, func) {
    var memo;
    return function() {
      if (--times2 > 0) {
        memo = func.apply(this, arguments);
      }
      if (times2 <= 1)
        func = null;
      return memo;
    };
  }

  // node_modules/underscore/modules/once.js
  var once_default = partial_default(before, 2);

  // node_modules/underscore/modules/findKey.js
  function findKey(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = keys(obj), key;
    for (var i = 0, length = _keys.length; i < length; i++) {
      key = _keys[i];
      if (predicate(obj[key], key, obj))
        return key;
    }
  }

  // node_modules/underscore/modules/_createPredicateIndexFinder.js
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength_default(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array))
          return index;
      }
      return -1;
    };
  }

  // node_modules/underscore/modules/findIndex.js
  var findIndex_default = createPredicateIndexFinder(1);

  // node_modules/underscore/modules/findLastIndex.js
  var findLastIndex_default = createPredicateIndexFinder(-1);

  // node_modules/underscore/modules/sortedIndex.js
  function sortedIndex(array, obj, iteratee2, context) {
    iteratee2 = cb(iteratee2, context, 1);
    var value = iteratee2(obj);
    var low = 0, high = getLength_default(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee2(array[mid]) < value)
        low = mid + 1;
      else
        high = mid;
    }
    return low;
  }

  // node_modules/underscore/modules/_createIndexFinder.js
  function createIndexFinder(dir, predicateFind, sortedIndex2) {
    return function(array, item, idx) {
      var i = 0, length = getLength_default(array);
      if (typeof idx == "number") {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex2 && idx && length) {
        idx = sortedIndex2(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), isNaN2);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item)
          return idx;
      }
      return -1;
    };
  }

  // node_modules/underscore/modules/indexOf.js
  var indexOf_default = createIndexFinder(1, findIndex_default, sortedIndex);

  // node_modules/underscore/modules/lastIndexOf.js
  var lastIndexOf_default = createIndexFinder(-1, findLastIndex_default);

  // node_modules/underscore/modules/find.js
  function find(obj, predicate, context) {
    var keyFinder = isArrayLike_default(obj) ? findIndex_default : findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1)
      return obj[key];
  }

  // node_modules/underscore/modules/findWhere.js
  function findWhere(obj, attrs) {
    return find(obj, matcher(attrs));
  }

  // node_modules/underscore/modules/each.js
  function each(obj, iteratee2, context) {
    iteratee2 = optimizeCb(iteratee2, context);
    var i, length;
    if (isArrayLike_default(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee2(obj[i], i, obj);
      }
    } else {
      var _keys = keys(obj);
      for (i = 0, length = _keys.length; i < length; i++) {
        iteratee2(obj[_keys[i]], _keys[i], obj);
      }
    }
    return obj;
  }

  // node_modules/underscore/modules/map.js
  function map(obj, iteratee2, context) {
    iteratee2 = cb(iteratee2, context);
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      results[index] = iteratee2(obj[currentKey], currentKey, obj);
    }
    return results;
  }

  // node_modules/underscore/modules/_createReduce.js
  function createReduce(dir) {
    var reducer = function(obj, iteratee2, memo, initial2) {
      var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
      if (!initial2) {
        memo = obj[_keys ? _keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = _keys ? _keys[index] : index;
        memo = iteratee2(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };
    return function(obj, iteratee2, memo, context) {
      var initial2 = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial2);
    };
  }

  // node_modules/underscore/modules/reduce.js
  var reduce_default = createReduce(1);

  // node_modules/underscore/modules/reduceRight.js
  var reduceRight_default = createReduce(-1);

  // node_modules/underscore/modules/filter.js
  function filter(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate(value, index, list))
        results.push(value);
    });
    return results;
  }

  // node_modules/underscore/modules/reject.js
  function reject(obj, predicate, context) {
    return filter(obj, negate(cb(predicate)), context);
  }

  // node_modules/underscore/modules/every.js
  function every(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj))
        return false;
    }
    return true;
  }

  // node_modules/underscore/modules/some.js
  function some(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj))
        return true;
    }
    return false;
  }

  // node_modules/underscore/modules/contains.js
  function contains(obj, item, fromIndex, guard) {
    if (!isArrayLike_default(obj))
      obj = values(obj);
    if (typeof fromIndex != "number" || guard)
      fromIndex = 0;
    return indexOf_default(obj, item, fromIndex) >= 0;
  }

  // node_modules/underscore/modules/invoke.js
  var invoke_default = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (isFunction_default(path)) {
      func = path;
    } else {
      path = toPath2(path);
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null)
          return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // node_modules/underscore/modules/pluck.js
  function pluck(obj, key) {
    return map(obj, property(key));
  }

  // node_modules/underscore/modules/where.js
  function where(obj, attrs) {
    return filter(obj, matcher(attrs));
  }

  // node_modules/underscore/modules/max.js
  function max(obj, iteratee2, context) {
    var result2 = -Infinity, lastComputed = -Infinity, value, computed;
    if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
      obj = isArrayLike_default(obj) ? obj : values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result2) {
          result2 = value;
        }
      }
    } else {
      iteratee2 = cb(iteratee2, context);
      each(obj, function(v, index, list) {
        computed = iteratee2(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
          result2 = v;
          lastComputed = computed;
        }
      });
    }
    return result2;
  }

  // node_modules/underscore/modules/min.js
  function min(obj, iteratee2, context) {
    var result2 = Infinity, lastComputed = Infinity, value, computed;
    if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
      obj = isArrayLike_default(obj) ? obj : values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result2) {
          result2 = value;
        }
      }
    } else {
      iteratee2 = cb(iteratee2, context);
      each(obj, function(v, index, list) {
        computed = iteratee2(v, index, list);
        if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
          result2 = v;
          lastComputed = computed;
        }
      });
    }
    return result2;
  }

  // node_modules/underscore/modules/toArray.js
  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  function toArray(obj) {
    if (!obj)
      return [];
    if (isArray_default(obj))
      return slice.call(obj);
    if (isString_default(obj)) {
      return obj.match(reStrSymbol);
    }
    if (isArrayLike_default(obj))
      return map(obj, identity);
    return values(obj);
  }

  // node_modules/underscore/modules/sample.js
  function sample(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike_default(obj))
        obj = values(obj);
      return obj[random(obj.length - 1)];
    }
    var sample2 = toArray(obj);
    var length = getLength_default(sample2);
    n = Math.max(Math.min(n, length), 0);
    var last2 = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = random(index, last2);
      var temp = sample2[index];
      sample2[index] = sample2[rand];
      sample2[rand] = temp;
    }
    return sample2.slice(0, n);
  }

  // node_modules/underscore/modules/shuffle.js
  function shuffle(obj) {
    return sample(obj, Infinity);
  }

  // node_modules/underscore/modules/sortBy.js
  function sortBy(obj, iteratee2, context) {
    var index = 0;
    iteratee2 = cb(iteratee2, context);
    return pluck(map(obj, function(value, key, list) {
      return {
        value,
        index: index++,
        criteria: iteratee2(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0)
          return 1;
        if (a < b || b === void 0)
          return -1;
      }
      return left.index - right.index;
    }), "value");
  }

  // node_modules/underscore/modules/_group.js
  function group(behavior, partition) {
    return function(obj, iteratee2, context) {
      var result2 = partition ? [[], []] : {};
      iteratee2 = cb(iteratee2, context);
      each(obj, function(value, index) {
        var key = iteratee2(value, index, obj);
        behavior(result2, value, key);
      });
      return result2;
    };
  }

  // node_modules/underscore/modules/groupBy.js
  var groupBy_default = group(function(result2, value, key) {
    if (has(result2, key))
      result2[key].push(value);
    else
      result2[key] = [value];
  });

  // node_modules/underscore/modules/indexBy.js
  var indexBy_default = group(function(result2, value, key) {
    result2[key] = value;
  });

  // node_modules/underscore/modules/countBy.js
  var countBy_default = group(function(result2, value, key) {
    if (has(result2, key))
      result2[key]++;
    else
      result2[key] = 1;
  });

  // node_modules/underscore/modules/partition.js
  var partition_default = group(function(result2, value, pass) {
    result2[pass ? 0 : 1].push(value);
  }, true);

  // node_modules/underscore/modules/size.js
  function size(obj) {
    if (obj == null)
      return 0;
    return isArrayLike_default(obj) ? obj.length : keys(obj).length;
  }

  // node_modules/underscore/modules/_keyInObj.js
  function keyInObj(value, key, obj) {
    return key in obj;
  }

  // node_modules/underscore/modules/pick.js
  var pick_default = restArguments(function(obj, keys2) {
    var result2 = {}, iteratee2 = keys2[0];
    if (obj == null)
      return result2;
    if (isFunction_default(iteratee2)) {
      if (keys2.length > 1)
        iteratee2 = optimizeCb(iteratee2, keys2[1]);
      keys2 = allKeys(obj);
    } else {
      iteratee2 = keyInObj;
      keys2 = flatten(keys2, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys2.length; i < length; i++) {
      var key = keys2[i];
      var value = obj[key];
      if (iteratee2(value, key, obj))
        result2[key] = value;
    }
    return result2;
  });

  // node_modules/underscore/modules/omit.js
  var omit_default = restArguments(function(obj, keys2) {
    var iteratee2 = keys2[0], context;
    if (isFunction_default(iteratee2)) {
      iteratee2 = negate(iteratee2);
      if (keys2.length > 1)
        context = keys2[1];
    } else {
      keys2 = map(flatten(keys2, false, false), String);
      iteratee2 = function(value, key) {
        return !contains(keys2, key);
      };
    }
    return pick_default(obj, iteratee2, context);
  });

  // node_modules/underscore/modules/initial.js
  function initial(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  }

  // node_modules/underscore/modules/first.js
  function first(array, n, guard) {
    if (array == null || array.length < 1)
      return n == null || guard ? void 0 : [];
    if (n == null || guard)
      return array[0];
    return initial(array, array.length - n);
  }

  // node_modules/underscore/modules/rest.js
  function rest(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  }

  // node_modules/underscore/modules/last.js
  function last(array, n, guard) {
    if (array == null || array.length < 1)
      return n == null || guard ? void 0 : [];
    if (n == null || guard)
      return array[array.length - 1];
    return rest(array, Math.max(0, array.length - n));
  }

  // node_modules/underscore/modules/compact.js
  function compact(array) {
    return filter(array, Boolean);
  }

  // node_modules/underscore/modules/flatten.js
  function flatten2(array, depth) {
    return flatten(array, depth, false);
  }

  // node_modules/underscore/modules/difference.js
  var difference_default = restArguments(function(array, rest2) {
    rest2 = flatten(rest2, true, true);
    return filter(array, function(value) {
      return !contains(rest2, value);
    });
  });

  // node_modules/underscore/modules/without.js
  var without_default = restArguments(function(array, otherArrays) {
    return difference_default(array, otherArrays);
  });

  // node_modules/underscore/modules/uniq.js
  function uniq(array, isSorted, iteratee2, context) {
    if (!isBoolean(isSorted)) {
      context = iteratee2;
      iteratee2 = isSorted;
      isSorted = false;
    }
    if (iteratee2 != null)
      iteratee2 = cb(iteratee2, context);
    var result2 = [];
    var seen = [];
    for (var i = 0, length = getLength_default(array); i < length; i++) {
      var value = array[i], computed = iteratee2 ? iteratee2(value, i, array) : value;
      if (isSorted && !iteratee2) {
        if (!i || seen !== computed)
          result2.push(value);
        seen = computed;
      } else if (iteratee2) {
        if (!contains(seen, computed)) {
          seen.push(computed);
          result2.push(value);
        }
      } else if (!contains(result2, value)) {
        result2.push(value);
      }
    }
    return result2;
  }

  // node_modules/underscore/modules/union.js
  var union_default = restArguments(function(arrays) {
    return uniq(flatten(arrays, true, true));
  });

  // node_modules/underscore/modules/intersection.js
  function intersection(array) {
    var result2 = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength_default(array); i < length; i++) {
      var item = array[i];
      if (contains(result2, item))
        continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!contains(arguments[j], item))
          break;
      }
      if (j === argsLength)
        result2.push(item);
    }
    return result2;
  }

  // node_modules/underscore/modules/unzip.js
  function unzip(array) {
    var length = array && max(array, getLength_default).length || 0;
    var result2 = Array(length);
    for (var index = 0; index < length; index++) {
      result2[index] = pluck(array, index);
    }
    return result2;
  }

  // node_modules/underscore/modules/zip.js
  var zip_default = restArguments(unzip);

  // node_modules/underscore/modules/object.js
  function object(list, values2) {
    var result2 = {};
    for (var i = 0, length = getLength_default(list); i < length; i++) {
      if (values2) {
        result2[list[i]] = values2[i];
      } else {
        result2[list[i][0]] = list[i][1];
      }
    }
    return result2;
  }

  // node_modules/underscore/modules/range.js
  function range(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }
    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range2 = Array(length);
    for (var idx = 0; idx < length; idx++, start += step) {
      range2[idx] = start;
    }
    return range2;
  }

  // node_modules/underscore/modules/chunk.js
  function chunk(array, count) {
    if (count == null || count < 1)
      return [];
    var result2 = [];
    var i = 0, length = array.length;
    while (i < length) {
      result2.push(slice.call(array, i, i += count));
    }
    return result2;
  }

  // node_modules/underscore/modules/_chainResult.js
  function chainResult(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  }

  // node_modules/underscore/modules/mixin.js
  function mixin(obj) {
    each(functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  }

  // node_modules/underscore/modules/underscore-array-methods.js
  each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      if (obj != null) {
        method.apply(obj, arguments);
        if ((name === "shift" || name === "splice") && obj.length === 0) {
          delete obj[0];
        }
      }
      return chainResult(this, obj);
    };
  });
  each(["concat", "join", "slice"], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      if (obj != null)
        obj = method.apply(obj, arguments);
      return chainResult(this, obj);
    };
  });
  var underscore_array_methods_default = _;

  // node_modules/underscore/modules/index-default.js
  var _2 = mixin(modules_exports);
  _2._ = _2;
  var index_default_default = _2;

  // node_modules/expensify-common/lib/str.js
  var import_html_entities = __toESM(require_lib());

  // node_modules/expensify-common/lib/CONST.jsx
  var EMAIL_BASE_REGEX = "(?=((?=[\\w'#%+-]+(?:\\.[\\w'#%+-]+)*@)[\\w\\.'#%+-]{1,64}@(?:(?=[a-z\\d]+(?:-+[a-z\\d]+)*\\.)(?:[a-z\\d-]{1,63}\\.)+[a-z]{2,63})(?= |_|\\b))(?<end>.*))\\S{3,254}(?=\\k<end>$)";
  var MOMENT_FORMAT_STRING = "YYYY-MM-DD";
  var g_cloudFront = "https://d2k5nsl2zxldvw.cloudfront.net";
  var g_cloudFrontImg = `${g_cloudFront}/images/`;
  var CONST = {
    CORPAY_DIRECT_REIMBURSEMENT_CURRENCIES: [
      "USD",
      "GBP",
      "EUR",
      "AUD",
      "CAD"
    ],
    /**
     * Default max ACH limit. It can be overwritten by a private NVP
     *
     * @type {Number}
     */
    ACH_DEFAULT_MAX_AMOUNT_LIMIT: 2e6,
    /**
     * IRS remimbursement rate for mileage
     * WARNING ! UPDATE THE PHP CONSTANT VERSION WHEN UPDATING THIS ONE
     *
     * @type Number
     */
    MILEAGE_IRS_RATE: /* @__PURE__ */ new Date() > new Date(2019, 1, 1) ? 0.545 : 0.58,
    /**
     * Display this amount to users to encourage them to book a call
     * 
     * @type Number
     */
    MAX_TRIAL_BONUS_DAYS: 42,
    COUNTRY: {
      US: "US",
      AU: "AU",
      UK: "UK",
      NZ: "NZ"
    },
    CURRENCIES: {
      US: "USD",
      AU: "AUD",
      UK: "GBP",
      NZ: "NZD"
    },
    STATES: {
      AK: {
        stateISO: "AK",
        stateName: "Alaska"
      },
      AL: {
        stateISO: "AL",
        stateName: "Alabama"
      },
      AR: {
        stateISO: "AR",
        stateName: "Arkansas"
      },
      AZ: {
        stateISO: "AZ",
        stateName: "Arizona"
      },
      CA: {
        stateISO: "CA",
        stateName: "California"
      },
      CO: {
        stateISO: "CO",
        stateName: "Colorado"
      },
      CT: {
        stateISO: "CT",
        stateName: "Connecticut"
      },
      DE: {
        stateISO: "DE",
        stateName: "Delaware"
      },
      FL: {
        stateISO: "FL",
        stateName: "Florida"
      },
      GA: {
        stateISO: "GA",
        stateName: "Georgia"
      },
      HI: {
        stateISO: "HI",
        stateName: "Hawaii"
      },
      IA: {
        stateISO: "IA",
        stateName: "Iowa"
      },
      ID: {
        stateISO: "ID",
        stateName: "Idaho"
      },
      IL: {
        stateISO: "IL",
        stateName: "Illinois"
      },
      IN: {
        stateISO: "IN",
        stateName: "Indiana"
      },
      KS: {
        stateISO: "KS",
        stateName: "Kansas"
      },
      KY: {
        stateISO: "KY",
        stateName: "Kentucky"
      },
      LA: {
        stateISO: "LA",
        stateName: "Louisiana"
      },
      MA: {
        stateISO: "MA",
        stateName: "Massachusetts"
      },
      MD: {
        stateISO: "MD",
        stateName: "Maryland"
      },
      ME: {
        stateISO: "ME",
        stateName: "Maine"
      },
      MI: {
        stateISO: "MI",
        stateName: "Michigan"
      },
      MN: {
        stateISO: "MN",
        stateName: "Minnesota"
      },
      MO: {
        stateISO: "MO",
        stateName: "Missouri"
      },
      MS: {
        stateISO: "MS",
        stateName: "Mississippi"
      },
      MT: {
        stateISO: "MT",
        stateName: "Montana"
      },
      NC: {
        stateISO: "NC",
        stateName: "North Carolina"
      },
      ND: {
        stateISO: "ND",
        stateName: "North Dakota"
      },
      NE: {
        stateISO: "NE",
        stateName: "Nebraska"
      },
      NH: {
        stateISO: "NH",
        stateName: "New Hampshire"
      },
      NJ: {
        stateISO: "NJ",
        stateName: "New Jersey"
      },
      NM: {
        stateISO: "NM",
        stateName: "New Mexico"
      },
      NV: {
        stateISO: "NV",
        stateName: "Nevada"
      },
      NY: {
        stateISO: "NY",
        stateName: "New York"
      },
      OH: {
        stateISO: "OH",
        stateName: "Ohio"
      },
      OK: {
        stateISO: "OK",
        stateName: "Oklahoma"
      },
      OR: {
        stateISO: "OR",
        stateName: "Oregon"
      },
      PA: {
        stateISO: "PA",
        stateName: "Pennsylvania"
      },
      PR: {
        stateISO: "PR",
        stateName: "Puerto Rico"
      },
      RI: {
        stateISO: "RI",
        stateName: "Rhode Island"
      },
      SC: {
        stateISO: "SC",
        stateName: "South Carolina"
      },
      SD: {
        stateISO: "SD",
        stateName: "South Dakota"
      },
      TN: {
        stateISO: "TN",
        stateName: "Tennessee"
      },
      TX: {
        stateISO: "TX",
        stateName: "Texas"
      },
      UT: {
        stateISO: "UT",
        stateName: "Utah"
      },
      VA: {
        stateISO: "VA",
        stateName: "Virginia"
      },
      VT: {
        stateISO: "VT",
        stateName: "Vermont"
      },
      WA: {
        stateISO: "WA",
        stateName: "Washington"
      },
      WI: {
        stateISO: "WI",
        stateName: "Wisconsin"
      },
      WV: {
        stateISO: "WV",
        stateName: "West Virginia"
      },
      WY: {
        stateISO: "WY",
        stateName: "Wyoming"
      },
      DC: {
        stateISO: "DC",
        stateName: "District Of Columbia"
      }
    },
    /**
     * Special characters that need to be removed when they are ending an url
     *
     * @type String
     */
    SPECIAL_CHARS_TO_REMOVE: "$*.+!(,=",
    /**
     * Store all the regular expression we are using for matching stuff
     */
    REG_EXP: {
      /**
       * Regular expression to check that a domain is valid
       *
       * @type RegExp
       */
      DOMAIN: /^[\w-\.]*\.\w{2,}$/,
      /**
       * Regex matching an text containing an email
       *
       * @type String
       */
      EMAIL_PART: EMAIL_BASE_REGEX,
      /**
      * Regex matching a text containing an E.164 format phone number
      */
      PHONE_PART: "\\+[1-9]\\d{1,14}",
      /**
       * Regular expression to check that a basic name is valid
       *
       * @type RegExp
       */
      FREE_NAME: /^[^\r\n\t]{1,256}$/,
      /**
       * Regular expression to check that a card is masked
       *
       * @type RegExp
       */
      MASKED_CARD: /^\d{0,6}[X]+\d{4,7}$/,
      /**
       * Regular expression to check that an email is valid
       *
       * @type RegExp
       */
      EMAIL: new RegExp(`^${EMAIL_BASE_REGEX}$`, "i"),
      /**
       * Regular expression to extract an email from a text
       *
       * @type RegExp
       */
      EXTRACT_EMAIL: new RegExp(EMAIL_BASE_REGEX, "gi"),
      /**
       * Regular expression to search for valid email addresses in a string
       *
       * @type RegExp
       */
      EMAIL_SEARCH: new RegExp(EMAIL_BASE_REGEX, "gi"),
      /**
       * Regular expression to detect if something is a hyperlink
       *
       * Adapted from: https://gist.github.com/dperini/729294
       *
       * @type RegExp
       */
      HYPERLINK: new RegExp("^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$", "i"),
      /**
       * Regex to match valid emails during markdown transformations
       *
       * @type String
       */
      MARKDOWN_EMAIL: EMAIL_BASE_REGEX,
      /**
       * Regex matching an text containing an Emoji
       *
       * @type RegExp
       */
      EMOJIS: /(?:[\xA9\xAE\u200D\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\uFE0F]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDFF\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFF]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD]|\uDB40[\uDC20-\uDC7F])|[#\*0-9]\uFE0F?\u20E3/g,
      /**
       * Regex matching an text containing an Emoji that can be a single emoji or made up by some different emojis
       *
       * @type RegExp
       */
      EMOJI_RULE: /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(\u200D(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])|(?:\uD83C[\uDFFB-\uDFFF])|(?:\uDB40[\uDC20-\uDC7F])|\uFE0F|\u20E3)*|(?:\uD83C[\uDDE6-\uDDFF]){2}|[#\*0-9]\uFE0F?\u20E3/g
    },
    REPORT: {
      /**
       * Limit when we decided to turn off print to pdf and use only the native feature
       */
      LIMIT_PRINT_PDF: 250,
      ACH_LIMIT: 2e6,
      ACH_DEFAULT_DAYS: 4,
      /**
       * This is the string that a user can enter in a formula to refer to the report title field
       *
       * @type {String}
       */
      TITLE_FORMULA: "{report:title}",
      /**
       * The max time a comment can be made after another to be considered the same comment, in seconds
       */
      MAX_AGE_SAME_COMMENT: 300,
      SMARTREPORT_AGENT_EMAIL: "smartreports@expensify.com"
    },
    /**
     * Root URLs
     */
    URL: {
      FORUM_ROOT: "https://community.expensify.com/",
      RECEIPTS: {
        DEVELOPMENT: "https://www.expensify.com.dev/receipts/",
        STAGING: "https://staging.expensify.com/receipts/",
        PRODUCTION: "https://www.expensify.com/receipts/"
      },
      CLOUDFRONT: "https://d2k5nsl2zxldvw.cloudfront.net",
      CLOUDFRONT_IMG: "https://d2k5nsl2zxldvw.cloudfront.net/images/",
      CLOUDFRONT_FILES: "https://d2k5nsl2zxldvw.cloudfront.net/files/",
      EXPENSIFY_SYNC_MANAGER: "quickbooksdesktop/Expensify_QuickBooksDesktop_Setup_2300802.exe",
      USEDOT_ROOT: "https://use.expensify.com/",
      ITUNES_SUBSCRIPTION: "https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/manageSubscriptions"
    },
    DATE: {
      FORMAT_STRING: "yyyy-MM-dd",
      FORMAT_STRING_PRETTY: "MMM d, yyyy",
      /**
       * Expensify date format string for moment js
       * usage: moment().format( CONST.DATE.MOMENT_FORMAT_STRING )
       */
      MOMENT_FORMAT_STRING,
      /**
       * This is a typical format of the date plus the time
       *
       * @type {String}
       */
      MOMENT_DATE_TIME: "YYYY-MM-DD HH:mm",
      /**
       * Pretty format used for report history items
       *
       * @example Jun 19, 2019 12:38 PM
       *
       * @type {String}
       */
      MOMENT_DATE_TIME_PRETTY: "MMM DD YYYY h:mma",
      /**
       * Date-time format, including timezone information, eg "2015-10-14T19:44:35+07:00"
       *
       * @type {String}
       */
      MOMENT_DATE_TIME_TIMEZONE: "YYYY-MM-DDTHH:mm:ssZ",
      /**
       * Moment formatting option for a date of this format "Jul 2, 2014"
       *
       * @type {string}
       */
      MOMENT_US_DATE: "MMM D, YYYY",
      /**
       * Moment formatting option for a date of this format "July 2, 2014"
       * ie, full month name
       *
       * @type {string}
       */
      MOMENT_US_DATE_LONG: "MMMM D, YYYY",
      /**
       * Moment formatting option for full month name and year as in "July 2015"
       *
       * @type {string}
       */
      MOMENT_US_MONTH_YEAR_LONG: "MMMM YYYY",
      /**
       * Difference between the local time and UTC time in ms
       */
      TIMEZONE_OFFSET_MS: (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4,
      SHORT_MONTH_SHORT_DAY: "MMM d",
      // e.g. Jan 1
      LONG_YEAR_MONTH_DAY_24_TIME: "yyyy-MM-dd HH:mm:ss",
      // e.g. 2020-01-01 20:45:15
      SHORT_MONTH_DAY_LOCAL_TIME: "MMM D [at] LT",
      // e.g. Jan 1 at 12:00 PM
      SHORT_MONTH_DAY_YEAR_LOCAL_TIME: "MMM D, YYYY [at] LT"
      // e.g. Jan 1, 2020 at 12:00 PM
    },
    /**
     * Message used by the Func.die() exception
     *
     * @type String
     */
    FUNC_DIE_MESSAGE: "Aborting JavaScript execution",
    /**
     * Default for how long the email delivery failure NVP should be valid (in seconds)
     * Currently 14 days (14 * 24 * 60 * 60)
     *
     * WARNING ! UPDATE THE PHP CONSTANT VERSION WHEN UPDATING THIS ONE
     *
     * @type Integer
     */
    EMAIL_DELIVERY_FAILURE_VALIDITY: 1209600,
    /**
     * Bill Processing-related constants
     */
    BILL_PROCESSING_PARTNER_NAME: "expensify.cash",
    BILL_PROCESSING_EMAIL_DOMAIN: "expensify.cash",
    /**
     * Bank Import Logic Constants
     */
    BANK_IMPORT: {
      BANK_STATUS_BROKEN: 2
    },
    /**
     * Bank Account Logic Constants
     */
    BANK_ACCOUNT: {
      VERIFICATION_MAX_ATTEMPTS: 7
    },
    /**
     * Emails that the user shouldn't be interacting with from the front-end interface
     * Trying to add these emails as a delegate, onto a policy, or as an approver is considered invalid
     * Any changes here should be reflected in the PHP constant in web-expensify,
     * which is located in _constant.php and also named EXPENSIFY_EMAILS.
     * And should also be reflected in the constant in expensify/app,
     * which is located in src/CONST.js and also named EXPENSIFY_EMAILS.
     */
    EXPENSIFY_EMAILS: [
      "concierge@expensify.com",
      "help@expensify.com",
      "receipts@expensify.com",
      "chronos@expensify.com",
      "qa@expensify.com",
      "contributors@expensify.com",
      "firstresponders@expensify.com",
      "qa+travisreceipts@expensify.com",
      "bills@expensify.com",
      "studentambassadors@expensify.com",
      "accounting@expensify.com",
      "payroll@expensify.com",
      "svfg@expensify.com",
      "integrationtestingcreds@expensify.com",
      "admin@expensify.com",
      "notifications@expensify.com"
    ],
    /**
    * Emails that the user shouldn't submit reports to nor share reports with
    * Any changes here should be reflected in the PHP constant,
    * which is located in _constant.php and also named INVALID_APPROVER_AND_SHAREE_EMAILS
    */
    INVALID_APPROVER_AND_SHAREE_EMAILS: [
      "concierge@expensify.com",
      "help@expensify.com",
      "receipts@expensify.com",
      "chronos@expensify.com",
      "qa@expensify.com",
      "contributors@expensify.com",
      "firstresponders@expensify.com",
      "qa+travisreceipts@expensify.com",
      "bills@expensify.com",
      "admin@expensify.com"
    ],
    /**
     * Smart scan-related constants
     */
    SMART_SCAN: {
      COST: 20,
      FREE_NUMBER: 25
    },
    SMS: {
      // Domain used for accounts that sign up with phone numbers
      DOMAIN: "expensify.sms",
      // Regex that matches on an E.164 phone number starting with a '+'
      E164_REGEX: /^\+?[1-9]\d{1,14}$/
    },
    PASSWORD_COMPLEXITY_REGEX_STRING: "^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$",
    INTEGRATIONS: {
      /**
       * Constants that specify how to map (import) Integrations data to Expensify
       * Parallel to IntegrationEntityMappingTypeEnum in the IS
       */
      DATA_MAPPING: {
        NONE: "NONE",
        TAG: "TAG",
        REPORT_FIELD: "REPORT_FIELD",
        DEFAULT: "DEFAULT"
      },
      EXPORT_DATE: {
        LAST_EXPENSE: "LAST_EXPENSE",
        REPORT_EXPORTED: "REPORT_EXPORTED",
        REPORT_SUBMITTED: "REPORT_SUBMITTED"
      },
      XERO_HQ_CONNECTION_NAME: "xerohq",
      EXPENSIFY_SYNC_MANAGER_VERSION: "23.0.802.0"
    },
    INTEGRATION_TYPES: {
      ACCOUNTING: "accounting",
      HR: "hr"
    },
    DIRECT_INTEGRATIONS: {
      zenefits: {
        value: "zenefits",
        text: "Zenefits",
        image: `${g_cloudFrontImg}icons/export-icons/zenefit.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/zenefit_gray.svg`,
        alert_image: `${g_cloudFrontImg}icons/export-icons/zenefit_alert.svg`,
        types: ["hr"],
        isCorporateOnly: false
      },
      gusto: {
        value: "gusto",
        text: "Gusto",
        image: `${g_cloudFrontImg}icons/export-icons/gusto.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/gusto_gray.svg`,
        alert_image: `${g_cloudFrontImg}icons/export-icons/gusto_alert.svg`,
        types: ["hr"],
        isCorporateOnly: false
      },
      quickbooksOnline: {
        value: "quickbooksOnline",
        text: "QuickBooks Online",
        image: `${g_cloudFrontImg}icons/export-icons/quickbooks.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/quickbooks_gray.svg`,
        alert_image: `${g_cloudFrontImg}icons/export-icons/quickbooks_alert.svg`,
        types: ["hr", "accounting"],
        isCorporateOnly: false
      },
      xero: {
        value: "xero",
        text: "Xero",
        image: `${g_cloudFrontImg}icons/export-icons/xero.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/xero_gray.svg`,
        alert_image: `${g_cloudFrontImg}icons/export-icons/xero_alert.svg`,
        types: ["accounting"],
        isCorporateOnly: false
      },
      netsuite: {
        value: "netsuite",
        text: "NetSuite",
        image: `${g_cloudFrontImg}icons/export-icons/netsuite.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/netsuite_gray.svg`,
        alert_image: `${g_cloudFrontImg}icons/export-icons/netsuite_alert.svg`,
        types: ["hr", "accounting"],
        isCorporateOnly: true
      },
      quickbooksDesktop: {
        value: "qbd",
        text: "QuickBooks Desktop",
        image: `${g_cloudFrontImg}icons/export-icons/quickbooks.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/quickbooks_gray.svg`,
        alert_image: `${g_cloudFrontImg}icons/export-icons/quickbooks_alert.svg`,
        types: ["accounting"],
        isCorporateOnly: false
      },
      intacct: {
        value: "intacct",
        text: "Sage Intacct",
        image: `${g_cloudFrontImg}icons/export-icons/sage.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/sage_gray.svg`,
        alert_image: `${g_cloudFrontImg}icons/export-icons/sage_alert.svg`,
        types: ["hr", "accounting"],
        isCorporateOnly: true
      },
      financialforce: {
        value: "financialforce",
        text: "Certinia",
        image: `${g_cloudFrontImg}icons/export-icons/certinia.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/certinia_gray.svg`,
        alert_image: `${g_cloudFrontImg}icons/export-icons/certinia_alert.svg`,
        types: ["accounting"],
        isCorporateOnly: true
      }
    },
    INDIRECT_INTEGRATIONS: {
      microsoft_dynamics: {
        value: "microsoft_dynamics",
        text: "Microsoft Dynamics",
        image: `${g_cloudFrontImg}icons/export-icons/microsoft_dynamics.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/microsoft_dynamics_gray.svg`,
        types: ["accounting"],
        isCorporateOnly: true
      },
      oracle: {
        value: "oracle",
        text: "Oracle",
        image: `${g_cloudFrontImg}icons/export-icons/oracle.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/oracle_gray.svg`,
        types: ["hr", "accounting"],
        isCorporateOnly: true
      },
      sage: {
        value: "sage",
        text: "Sage",
        image: `${g_cloudFrontImg}icons/export-icons/sage.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/sage_gray.svg`,
        types: ["accounting"],
        isCorporateOnly: true
      },
      sap: {
        value: "sap",
        text: "SAP",
        image: `${g_cloudFrontImg}icons/export-icons/sap.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/sap_gray.svg`,
        types: ["accounting"],
        isCorporateOnly: true
      },
      myob: {
        value: "myob",
        text: "MYOB",
        image: `${g_cloudFrontImg}icons/export-icons/myob.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/myob_gray.svg`,
        types: ["accounting"],
        isCorporateOnly: true
      },
      workday: {
        value: "workday",
        text: "Workday",
        image: `${g_cloudFrontImg}icons/export-icons/workday.svg`,
        gray_image: `${g_cloudFrontImg}icons/export-icons/workday_gray.svg`,
        types: ["hr"],
        isCorporateOnly: true
      },
      adp: {
        value: "adp",
        text: "ADP",
        image: `${g_cloudFrontImg}icons/export-icons/adp.svg`,
        types: ["hr"],
        isCorporateOnly: true
      },
      generic_indirect_connection: {
        value: "generic_indirect_connection",
        text: "Other",
        image: `${g_cloudFrontImg}icons/accounting-other--blue.svg`,
        types: ["hr", "accounting"]
      }
    },
    DEFAULT_IS_TEMPLATES: {
      default: {
        value: "default_template",
        text: "Basic Export",
        image: `${g_cloudFrontImg}icons/accounting-other--blue.svg`
      },
      tag: {
        value: "tag_template",
        text: "Tag Export",
        image: `${g_cloudFrontImg}icons/accounting-other--blue.svg`
      },
      category: {
        value: "category_template",
        text: "Category Export",
        image: `${g_cloudFrontImg}icons/accounting-other--blue.svg`
      },
      detailed: {
        value: "detailed_export",
        text: "All Data - Expense Level Export",
        image: `${g_cloudFrontImg}icons/accounting-other--blue.svg`
      },
      report: {
        value: "report_level_export",
        text: "All Data - Report Level Export",
        image: `${g_cloudFrontImg}icons/accounting-other--blue.svg`
      },
      tax: {
        value: "multiple_tax_export",
        text: "Canadian Multiple Tax Export",
        image: `${g_cloudFrontImg}icons/accounting-other--blue.svg`
      },
      perdiem: {
        value: "per_diem_export",
        text: "Per Diem Export",
        image: `${g_cloudFrontImg}icons/accounting-other--blue.svg`
      },
      attendees: {
        value: "attendee_audit_export",
        text: "Attendee Audit Export",
        image: `${g_cloudFrontImg}icons/accounting-other--blue.svg`
      }
    },
    NVP: {
      // Dismissed Violations
      DISMISSED_VIOLATIONS: "dismissedViolations"
    },
    FILESIZE: {
      BYTES_IN_MEGABYTE: 1e6,
      // Bytes in a Megabyte
      MAX: 1e7
      // Our max filesize allowed is 10MB
    },
    PARTNER_NAMES: {
      IPHONE: "iphone",
      ANDROID: "android",
      CHAT: "chat-expensify-com"
    },
    LOGIN_TYPES: {
      WEB: "login",
      MOBILE: "device"
    },
    EXPENSIFY_CARD: {
      FEED_NAME: "Expensify Card",
      // The following variables must be kept up to date with the Card::FraudState constants found in Auth
      FRAUD_STATES: {
        NONE: 0,
        DOMAIN_CARDS_REIMBURSEMENTS_INVESTIGATION: 1,
        DOMAIN_CARDS_RAPID_INCREASE_INVESTIGATION: 2,
        DOMAIN_CARDS_RAPID_INCREASE_CLEARED: 3,
        DOMAIN_CARDS_RAPID_INCREASE_CONFIRMED: 4,
        INDIVIDUAL_CARD_RAPID_INCREASE_INVESTIGATION: 5,
        INDIVIDUAL_CARD_RAPID_INCREASE_CLEARED: 6,
        INDIVIDUAL_CARD_RAPID_INCREASE_CONFIRMED: 7,
        SUSPICIOUS_PAN_ENTRY: 8,
        SUSPICIOUS_PAN_ENTRY_CLEARED: 9,
        SUSPICIOUS_PAN_ENTRY_CONFIRMED: 10
      }
    },
    TRAVEL_BOOKING: {
      OPTIONS: {
        shortFlightFare: {
          economy: "Economy",
          premiumEconomy: "Premium Economy",
          business: "Business",
          first: "First"
        },
        longFlightFare: {
          economy: "Economy",
          premiumEconomy: "Premium Economy",
          business: "Business",
          first: "First"
        },
        hotelStar: {
          oneStar: "1",
          twoStars: "2",
          threeStars: "3",
          fourStars: "4",
          fiveStars: "5"
        }
      },
      DEFAULT_OPTIONS: {
        shortFlightFare: "economy",
        longFlightFare: "economy",
        hotelStar: "fourStars"
      }
    },
    // Expensify domains
    EXPENSIFY_DOMAINS: [
      "expensify.com",
      "expensifail.com",
      "expensicorp.com"
    ],
    SUBSCRIPTION_CHANGE_REASONS: {
      TOO_LIMITED: {
        id: "tooLimited",
        label: "Functionality needs improvement",
        prompt: "What software are you migrating to and what led to this decision?"
      },
      TOO_EXPENSIVE: {
        id: "tooExpensive",
        label: "Too expensive",
        prompt: "What software are you migrating to and what led to this decision?"
      },
      INADEQUATE_SUPPORT: {
        id: "inadequateSupport",
        label: "Inadequate customer support",
        prompt: "What software are you migrating to and what led to this decision?"
      },
      BUSINESS_CLOSING: {
        id: "businessClosing",
        label: "Company closing, downsizing, or acquired",
        prompt: "What software are you migrating to and what led to this decision?"
      }
    }
  };

  // node_modules/expensify-common/lib/tlds.jsx
  var TLD_REGEX = "XN--VERMGENSBERATUNG-PWB|XN--VERMGENSBERATER-CTB|XN--CLCHC0EA0B2G2A9GCD|XN--W4R85EL8FHU5DNRA|TRAVELERSINSURANCE|NORTHWESTERNMUTUAL|XN--XKC2DL3A5EE0H|XN--MGBERP4A5D4AR|XN--MGBAI9AZGQP6J|XN--MGBAH1A3HJKRD|XN--BCK1B9A5DRE4C|XN--5SU34J936BGSG|XN--3OQ18VL8PN36A|XN--XKC2AL3HYE2A|XN--MGBCPQ6GPA1A|XN--MGBA7C0BBN0A|XN--FZYS8D69UVGM|XN--NQV7FS00EMA|XN--MGBC0A9AZCG|XN--MGBAAKC7DVF|XN--MGBA3A4F16A|XN--LGBBAT1AD8J|XN--KCRX77D1X4A|XN--I1B6B1A6A2E|SANDVIKCOROMANT|KERRYPROPERTIES|AMERICANEXPRESS|XN--RVC1E0AM3E|XN--MGBX4CD0AB|XN--MGBI4ECEXP|XN--MGBCA7DZDO|XN--MGBBH1A71E|XN--MGBAYH7GPA|XN--MGBAAM7A8H|XN--MGBA3A3EJT|XN--JLQ61U9W7B|XN--JLQ480N2RG|XN--H2BREG3EVE|XN--FIQ228C5HS|XN--B4W605FERD|XN--80AQECDR1A|XN--6QQ986B3XL|XN--54B7FTA0CC|WEATHERCHANNEL|KERRYLOGISTICS|COOKINGCHANNEL|CANCERRESEARCH|BANANAREPUBLIC|AMERICANFAMILY|AFAMILYCOMPANY|XN--YGBI2AMMX|XN--YFRO4I67O|XN--TIQ49XQYJ|XN--H2BRJ9C8C|XN--FZC2C9E2C|XN--FPCRJ9C3D|XN--ECKVDTC9D|XN--CCKWCXETD|WOLTERSKLUWER|TRAVELCHANNEL|SPREADBETTING|LIFEINSURANCE|INTERNATIONAL|XN--QCKA1PMC|XN--OGBPF8FL|XN--NGBE9E0A|XN--NGBC5AZD|XN--MK1BU44C|XN--MGBT3DHD|XN--MGBPL2FH|XN--MGBGU82A|XN--MGBAB2BD|XN--MGB9AWBF|XN--GCKR3F0F|XN--8Y0A063A|XN--80ASEHDB|XN--80ADXHKS|XN--4DBRK0CE|XN--45BR5CYL|XN--3E0B707E|VERSICHERUNG|SCHOLARSHIPS|LPLFINANCIAL|CONSTRUCTION|XN--ZFR164B|XN--XHQ521B|XN--W4RS40L|XN--VUQ861B|XN--T60B56A|XN--SES554G|XN--S9BRJ9C|XN--ROVU88B|XN--RHQV96G|XN--Q9JYB4C|XN--PGBS0DH|XN--OTU796D|XN--NYQY26A|XN--MIX891F|XN--MGBTX2B|XN--MGBBH1A|XN--KPRY57D|XN--KPRW13D|XN--JVR189M|XN--J6W193G|XN--IMR513N|XN--HXT814E|XN--H2BRJ9C|XN--GK3AT1E|XN--GECRJ9C|XN--G2XX48C|XN--FLW351E|XN--FJQ720A|XN--FCT429K|XN--EFVY88H|XN--D1ACJ3B|XN--CZR694B|XN--CCK2B3B|XN--9KRT00A|XN--80AO21A|XN--6FRZ82G|XN--55QW42G|XN--45BRJ9C|XN--42C2D9A|XN--3HCRJ9C|XN--3DS443G|XN--3BST00M|XN--2SCRJ9C|XN--1QQW23A|XN--1CK2E1B|XN--11B4C3D|WILLIAMHILL|REDUMBRELLA|PROGRESSIVE|PRODUCTIONS|PLAYSTATION|PHOTOGRAPHY|OLAYANGROUP|MOTORCYCLES|LAMBORGHINI|KERRYHOTELS|INVESTMENTS|FOODNETWORK|ENTERPRISES|ENGINEERING|CREDITUNION|CONTRACTORS|CALVINKLEIN|BRIDGESTONE|BLOCKBUSTER|BLACKFRIDAY|BARCLAYCARD|ACCOUNTANTS|XN--Y9A3AQ|XN--WGBL6A|XN--WGBH1C|XN--UNUP4Y|XN--Q7CE6A|XN--PSSY2U|XN--O3CW4H|XN--MXTQ1M|XN--KPUT3I|XN--IO0A7I|XN--FIQZ9S|XN--FIQS8S|XN--FIQ64B|XN--CZRU2D|XN--CZRS0T|XN--CG4BKI|XN--C2BR7G|XN--9ET52U|XN--9DBQ2A|XN--90A3AC|XN--80ASWG|XN--5TZM5G|XN--55QX5D|XN--4GBRIM|XN--45Q11C|XN--3PXU8K|XN--30RR7Y|VOLKSWAGEN|VLAANDEREN|UNIVERSITY|TECHNOLOGY|TATAMOTORS|SWIFTCOVER|SCHAEFFLER|RESTAURANT|REPUBLICAN|REALESTATE|PRUDENTIAL|PROTECTION|PROPERTIES|ONYOURSIDE|NEXTDIRECT|NATIONWIDE|MITSUBISHI|MANAGEMENT|INDUSTRIES|IMMOBILIEN|HEALTHCARE|FOUNDATION|EXTRASPACE|EUROVISION|CUISINELLA|CREDITCARD|CONSULTING|CAPITALONE|BOEHRINGER|BNPPARIBAS|BASKETBALL|ASSOCIATES|APARTMENTS|ACCOUNTANT|YODOBASHI|XN--VHQUV|XN--TCKWE|XN--QXA6A|XN--P1ACF|XN--NQV7F|XN--NGBRX|XN--L1ACC|XN--J1AMH|XN--J1AEF|XN--FHBEI|XN--E1A4C|XN--D1ALF|XN--C1AVG|XN--90AIS|VACATIONS|TRAVELERS|STOCKHOLM|STATEFARM|STATEBANK|SOLUTIONS|SHANGRILA|SCJOHNSON|RICHARDLI|PRAMERICA|PASSAGENS|PANASONIC|MICROSOFT|MELBOURNE|MARSHALLS|MARKETING|LIFESTYLE|LANDROVER|LANCASTER|KUOKGROUP|INSURANCE|INSTITUTE|HOMESENSE|HOMEGOODS|HOMEDEPOT|HISAMITSU|GOLDPOINT|FURNITURE|FUJIXEROX|FRONTDOOR|FRESENIUS|FIRESTONE|FINANCIAL|FAIRWINDS|EQUIPMENT|EDUCATION|DIRECTORY|COMMUNITY|CHRISTMAS|BLOOMBERG|BARCELONA|AQUARELLE|ANALYTICS|AMSTERDAM|ALLFINANZ|ALFAROMEO|ACCENTURE|YOKOHAMA|XN--QXAM|XN--P1AI|XN--NODE|XN--90AE|WOODSIDE|VERISIGN|VENTURES|VANGUARD|TRAINING|SUPPLIES|STCGROUP|SOFTWARE|SOFTBANK|SHOWTIME|SHOPPING|SERVICES|SECURITY|SAMSCLUB|SAARLAND|RELIANCE|REDSTONE|PROPERTY|PLUMBING|PICTURES|PHARMACY|PARTNERS|OBSERVER|MORTGAGE|MERCKMSD|MEMORIAL|MCKINSEY|MASERATI|MARRIOTT|LUNDBECK|LIGHTING|JPMORGAN|ISTANBUL|IPIRANGA|INFINITI|HOSPITAL|HOLDINGS|HELSINKI|HDFCBANK|GUARDIAN|GRAPHICS|GRAINGER|GOODYEAR|FRONTIER|FOOTBALL|FIRMDALE|FIDELITY|FEEDBACK|EXCHANGE|ETISALAT|ERICSSON|ENGINEER|DOWNLOAD|DISCOVER|DISCOUNT|DIAMONDS|DEMOCRAT|DELOITTE|DELIVERY|COMPUTER|COMMBANK|CLOTHING|CLINIQUE|CLEANING|CITYEATS|CIPRIANI|CATHOLIC|CATERING|CAPETOWN|BUSINESS|BUILDERS|BUDAPEST|BRUSSELS|BROADWAY|BRADESCO|BOUTIQUE|BASEBALL|BARGAINS|BAREFOOT|BARCLAYS|ATTORNEY|ALLSTATE|AIRFORCE|ABUDHABI|ZUERICH|YOUTUBE|YAMAXUN|XFINITY|WINNERS|WINDOWS|WHOSWHO|WEDDING|WEBSITE|WEATHER|WATCHES|WANGGOU|WALMART|TRADING|TOSHIBA|TIFFANY|TICKETS|THEATRE|THEATER|TEMASEK|SYSTEMS|SURGERY|SUPPORT|STORAGE|STAPLES|SINGLES|SHIKSHA|SCIENCE|SCHWARZ|SCHMIDT|SANDVIK|SAMSUNG|REXROTH|REVIEWS|RENTALS|RECIPES|REALTOR|POLITIE|PIONEER|PHILIPS|ORIGINS|ORGANIC|OLDNAVY|OKINAWA|NEUSTAR|NETWORK|NETFLIX|NETBANK|MONSTER|MARKETS|LINCOLN|LIMITED|LECLERC|LATROBE|LASALLE|LANXESS|LACAIXA|KOMATSU|KITCHEN|JUNIPER|JEWELRY|ISMAILI|HYUNDAI|HOTMAIL|HOTELES|HOSTING|HOLIDAY|HITACHI|HANGOUT|HAMBURG|GUITARS|GROCERY|GODADDY|GENTING|GALLERY|FUJITSU|FROGANS|FORSALE|FLOWERS|FLORIST|FLIGHTS|FITNESS|FISHING|FINANCE|FERRERO|FERRARI|FASHION|FARMERS|EXPRESS|EXPOSED|DOMAINS|DIGITAL|DENTIST|CRUISES|CRICKET|COURSES|COUPONS|COUNTRY|CORSICA|COOKING|CONTACT|COMPARE|COMPANY|COMCAST|COLOGNE|COLLEGE|CLUBMED|CITADEL|CHINTAI|CHARITY|CHANNEL|CAREERS|CARAVAN|CAPITAL|BUGATTI|BROTHER|BOOKING|BESTBUY|BENTLEY|BAUHAUS|BANAMEX|AVIANCA|AUSPOST|AUDIBLE|AUCTION|ATHLETA|ANDROID|ALIBABA|AGAKHAN|ACADEMY|ABOGADO|ZAPPOS|YANDEX|YACHTS|XIHUAN|WEBCAM|WALTER|VUELOS|VOYAGE|VOTING|VISION|VIRGIN|VILLAS|VIKING|VIAJES|UNICOM|TRAVEL|TOYOTA|TKMAXX|TJMAXX|TIENDA|TENNIS|TATTOO|TARGET|TAOBAO|TAIPEI|SYDNEY|SWATCH|SUZUKI|SUPPLY|STUDIO|STREAM|SOCIAL|SOCCER|SHOUJI|SELECT|SECURE|SEARCH|SCHULE|SCHOOL|SANOFI|SAKURA|SAFETY|RYUKYU|ROGERS|ROCHER|REVIEW|REPORT|REPAIR|REISEN|REALTY|RACING|QUEBEC|PICTET|PHYSIO|PHOTOS|PFIZER|OTSUKA|ORANGE|ORACLE|ONLINE|OLAYAN|OFFICE|NOWRUZ|NORTON|NISSAY|NISSAN|NATURA|NAGOYA|MUTUAL|MUSEUM|MOSCOW|MORMON|MONASH|MOBILE|MATTEL|MARKET|MAKEUP|MAISON|MADRID|LUXURY|LONDON|LOCKER|LIVING|LEFRAK|LAWYER|LATINO|LANCIA|KOSHER|KINDLE|KINDER|KAUFEN|JUEGOS|JOBURG|JAGUAR|INTUIT|INSURE|IMAMAT|HUGHES|HOTELS|HOCKEY|HIPHOP|HERMES|HEALTH|GRATIS|GOOGLE|GLOBAL|GIVING|GEORGE|GARDEN|GALLUP|FUTBOL|FLICKR|FAMILY|EXPERT|EVENTS|ESTATE|ENERGY|EMERCK|DURBAN|DUPONT|DUNLOP|DOCTOR|DIRECT|DESIGN|DENTAL|DEGREE|DEALER|DATSUN|DATING|CRUISE|CREDIT|COUPON|CONDOS|COMSEC|COFFEE|CLINIC|CLAIMS|CIRCLE|CHURCH|CHROME|CHANEL|CENTER|CASINO|CAREER|CAMERA|BROKER|BOSTON|BOSTIK|BHARTI|BERLIN|BEAUTY|BAYERN|AUTHOR|ARAMCO|ANQUAN|AMAZON|ALSTOM|ALSACE|ALIPAY|AIRTEL|AIRBUS|AGENCY|AFRICA|ABBVIE|ABBOTT|ABARTH|YAHOO|XEROX|WORLD|WORKS|WEIBO|WEBER|WATCH|WALES|VOLVO|VODKA|VIDEO|VEGAS|UBANK|TUSHU|TUNES|TRUST|TRADE|TOURS|TOTAL|TORAY|TOOLS|TOKYO|TODAY|TMALL|TIROL|TIRES|TATAR|SWISS|SUCKS|STYLE|STUDY|STORE|STADA|SPORT|SPACE|SOLAR|SMILE|SMART|SLING|SKYPE|SHOES|SHELL|SHARP|SEVEN|SENER|SALON|RUGBY|RODEO|ROCKS|RICOH|REISE|REHAB|RADIO|QUEST|PROMO|PRIME|PRESS|PRAXI|POKER|PLACE|PIZZA|PHOTO|PHONE|PARTY|PARTS|PARIS|OSAKA|OMEGA|NOWTV|NOKIA|NINJA|NIKON|NEXUS|MOVIE|MONEY|MIAMI|MEDIA|MANGO|MACYS|LOTTO|LOTTE|LOCUS|LOANS|LIXIL|LIPSY|LINDE|LILLY|LEXUS|LEGAL|LEASE|LAMER|KYOTO|KOELN|JETZT|IVECO|IRISH|IKANO|HYATT|HOUSE|HORSE|HONDA|HOMES|GUIDE|GUCCI|GROUP|GRIPE|GREEN|GMAIL|GLOBO|GLASS|GLADE|GIVES|GIFTS|GAMES|GALLO|FORUM|FOREX|FINAL|FEDEX|FAITH|EPSON|EMAIL|EDEKA|EARTH|DUBAI|DRIVE|DELTA|DEALS|DANCE|DABUR|CYMRU|CROWN|CODES|COACH|CLOUD|CLICK|CITIC|CISCO|CHEAP|CHASE|CARDS|CANON|BUILD|BOSCH|BOATS|BLACK|BINGO|BIBLE|BEATS|BAIDU|AZURE|AUTOS|AUDIO|ARCHI|APPLE|AMICA|AMFAM|AETNA|ADULT|ACTOR|ZONE|ZERO|ZARA|YOGA|XBOX|WORK|WINE|WIKI|WIEN|WEIR|WANG|VOTO|VOTE|VIVO|VIVA|VISA|VANA|TUBE|TOYS|TOWN|TIPS|TIAA|TEVA|TECH|TEAM|TAXI|TALK|SURF|STAR|SPOT|SONY|SONG|SOHU|SNCF|SKIN|SITE|SINA|SILK|SHOW|SHOP|SHIA|SHAW|SEXY|SEEK|SEAT|SCOT|SAXO|SAVE|SARL|SALE|SAFE|RUHR|RSVP|ROOM|RMIT|RICH|REST|RENT|REIT|READ|RAID|QPON|PROF|PROD|POST|PORN|POHL|PLUS|PLAY|PINK|PING|PICS|PCCW|PARS|PAGE|OPEN|OLLO|NIKE|NICO|NEXT|NEWS|NAVY|NAME|MOTO|MODA|MOBI|MINT|MINI|MENU|MEME|MEET|MAIF|LUXE|LTDA|LOVE|LOFT|LOAN|LIVE|LINK|LIMO|LIKE|LIFE|LIDL|LGBT|LEGO|LAND|KRED|KPMG|KIWI|KDDI|JPRS|JOBS|JEEP|JAVA|ITAU|INFO|IMMO|IMDB|IEEE|ICBC|HSBC|HOST|HGTV|HERE|HELP|HDFC|HAUS|HAIR|GURU|GUGE|GOOG|GOLF|GOLD|GMBH|GIFT|GGEE|GENT|GBIZ|GAME|FUND|FREE|FORD|FOOD|FLIR|FISH|FIRE|FILM|FIDO|FIAT|FAST|FARM|FANS|FAIL|FAGE|ERNI|DVAG|DUCK|DOCS|DISH|DIET|DESI|DELL|DEAL|DCLK|DATE|DATA|CYOU|COOP|COOL|CLUB|CITY|CITI|CHAT|CERN|CBRE|CASH|CASE|CASA|CARS|CARE|CAMP|CALL|CAFE|BUZZ|BOOK|BOND|BOFA|BLUE|BLOG|BING|BIKE|BEST|BEER|BBVA|BANK|BAND|BABY|AUTO|AUDI|ASIA|ASDA|ARTE|ARPA|ARMY|ARAB|AMEX|ALLY|AKDN|AERO|ADAC|ABLE|AARP|ZIP|YUN|YOU|XYZ|XXX|XIN|WTF|WTC|WOW|WME|WIN|WED|VIP|VIN|VIG|VET|UPS|UOL|UNO|UBS|TVS|TUI|TRV|TOP|TJX|THD|TEL|TDK|TCI|TAX|TAB|STC|SRL|SPA|SOY|SKY|SKI|SFR|SEX|SEW|SES|SCB|SCA|SBS|SBI|SAS|SAP|RWE|RUN|RIP|RIO|RIL|REN|RED|QVC|PWC|PUB|PRU|PRO|PNC|PIN|PID|PHD|PET|PAY|OVH|OTT|ORG|OOO|ONL|ONG|ONE|OFF|OBI|NYC|NTT|NRW|NRA|NOW|NHK|NGO|NFL|NEW|NET|NEC|NBA|NAB|MTR|MTN|MSD|MOV|MOM|MOI|MOE|MMA|MLS|MLB|MIT|MIL|MEN|MED|MBA|MAP|MAN|LTD|LPL|LOL|LLP|LLC|LDS|LAW|LAT|KRD|KPN|KIM|KIA|KFH|JOY|JOT|JNJ|JMP|JLL|JIO|JCB|ITV|IST|INT|INK|ING|INC|IFM|ICU|ICE|IBM|HOW|HOT|HKT|HIV|HBO|GOV|GOT|GOP|GOO|GMX|GMO|GLE|GEA|GDN|GAY|GAP|GAL|FYI|FUN|FTR|FRL|FOX|FOO|FLY|FIT|FAN|EUS|ESQ|EDU|ECO|EAT|DVR|DTV|DOT|DOG|DNP|DIY|DHL|DEV|DDS|DAY|DAD|CSC|CRS|CPA|COM|CFD|CFA|CEO|CBS|CBN|CBA|CAT|CAR|CAM|CAL|CAB|BZH|BUY|BOX|BOT|BOO|BOM|BMW|BMS|BIZ|BIO|BID|BET|BCN|BCG|BBT|BBC|BAR|AXA|AWS|ART|APP|AOL|ANZ|AIG|AFL|AEG|ADS|ACO|ABC|ABB|AAA|ZW|ZM|ZA|YT|YE|WS|WF|VU|VN|VI|VG|VE|VC|VA|UZ|UY|US|UK|UG|UA|TZ|TW|TV|TT|TR|TO|TN|TM|TL|TK|TJ|TH|TG|TF|TD|TC|SZ|SY|SX|SV|SU|ST|SS|SR|SO|SN|SM|SL|SK|SJ|SI|SH|SG|SE|SD|SC|SB|SA|RW|RU|RS|RO|RE|QA|PY|PW|PT|PS|PR|PN|PM|PL|PK|PH|PG|PF|PE|PA|OM|NZ|NU|NR|NP|NO|NL|NI|NG|NF|NE|NC|NA|MZ|MY|MX|MW|MV|MU|MT|MS|MR|MQ|MP|MO|MN|MM|ML|MK|MH|MG|ME|MD|MC|MA|LY|LV|LU|LT|LS|LR|LK|LI|LC|LB|LA|KZ|KY|KW|KR|KP|KN|KM|KI|KH|KG|KE|JP|JO|JM|JE|IT|IS|IR|IQ|IO|IN|IM|IL|IE|ID|HU|HT|HR|HN|HM|HK|GY|GW|GU|GT|GS|GR|GQ|GP|GN|GM|GL|GI|GH|GG|GF|GE|GD|GB|GA|FR|FO|FM|FK|FJ|FI|EU|ET|ES|ER|EG|EE|EC|DZ|DO|DM|DK|DJ|DE|CZ|CY|CX|CW|CV|CU|CR|CO|CN|CM|CL|CK|CI|CH|CG|CF|CD|CC|CA|BZ|BY|BW|BV|BT|BS|BR|BO|BN|BM|BJ|BI|BH|BG|BF|BE|BD|BB|BA|AZ|AX|AW|AU|AT|AS|AR|AQ|AO|AM|AL|AI|AG|AF|AE|AD|AC|SJC|RNO|LAX";
  var tlds_default = TLD_REGEX;

  // node_modules/expensify-common/lib/Url.js
  var ALLOWED_PORTS = "([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])";
  var URL_PROTOCOL_REGEX = "((ht|f)tps?:\\/\\/)";
  var URL_WEBSITE_REGEX = `${URL_PROTOCOL_REGEX}?((?:www\\.)?[a-z0-9](?=(?<label>[-a-z0-9]*[a-z0-9])?)\\k<label>\\.)+(?:${tlds_default})(?:\\:${ALLOWED_PORTS}|\\b|(?=_))(?!@(?:[a-z\\d-]+\\.)+[a-z]{2,})`;
  var addEscapedChar = (reg) => `(?:${reg}|&(?:amp|#x27);)`;
  var URL_PATH_REGEX = `(?:${addEscapedChar("[.,=(+$!*]")}?\\/${addEscapedChar("[-\\w$@.+!*:(),=%~]")}*${addEscapedChar("[-\\w~@:%)]")}|\\/)*`;
  var URL_PARAM_REGEX = `(?:\\?${addEscapedChar("[-\\w$@.+!*()\\/,=%{}:;\\[\\]\\|_|~]")}*)?`;
  var URL_FRAGMENT_REGEX = `(?:#${addEscapedChar("[-\\w$@.+!*()[\\],=%;\\/:~]")}*)?`;
  var URL_REGEX = `((${URL_WEBSITE_REGEX})${URL_PATH_REGEX}(?:${URL_PARAM_REGEX}|${URL_FRAGMENT_REGEX})*)`;
  var URL_REGEX_WITH_REQUIRED_PROTOCOL = URL_REGEX.replace(`${URL_PROTOCOL_REGEX}?`, URL_PROTOCOL_REGEX);
  var LOOSE_URL_WEBSITE_REGEX = `${URL_PROTOCOL_REGEX}([a-z0-9](?:[-a-z0-9]*[a-z0-9])?\\.)*(?:[a-z0-9](?:[-a-z0-9]*[a-z0-9])?)(?:\\:${ALLOWED_PORTS}|\\b|(?=_))`;
  var LOOSE_URL_REGEX = `((${LOOSE_URL_WEBSITE_REGEX})${URL_PATH_REGEX}(?:${URL_PARAM_REGEX}|${URL_FRAGMENT_REGEX})*)`;
  var MARKDOWN_URL_REGEX = `(${LOOSE_URL_REGEX}|${URL_REGEX})`;

  // node_modules/expensify-common/lib/str.js
  var REMOVE_SMS_DOMAIN_PATTERN = new RegExp(`@${CONST.SMS.DOMAIN}`, "gi");
  var Str = {
    /**
     * Return true if the string is ending with the provided suffix
     *
     * @param {String} str String ot search in
     * @param {String} suffix What to look for
     * @return {Boolean}
     */
    endsWith(str, suffix) {
      if (!str || !suffix) {
        return false;
      }
      return str.substr(-suffix.length) === suffix;
    },
    /**
     * Converts a USD string into th number of cents it represents.
     *
     * @param {String}  amountStr     A string representing a USD value.
     * @param {Boolean} allowFraction Flag indicating if fractions of cents should be
     *                               allowed in the output.
     *
     * @return {Number} The cent value of the @p amountStr.
     */
    fromUSDToNumber(amountStr, allowFraction) {
      let amount = String(amountStr).replace(/[^\d.\-()]+/g, "");
      if (amount.match(/\(.*\)/)) {
        const modifiedAmount = amount.replace(/[()]/g, "");
        amount = `-${modifiedAmount}`;
      }
      amount = Number(amount) * 100;
      amount = Math.round(amount * 1e3) / 1e3;
      return allowFraction ? amount : Math.round(amount);
    },
    /**
     * Truncates the middle section of a string based on the max allowed length
     * @param {string} fullStr
     * @param {int}    maxLength
     * @returns {string}
     */
    truncateInMiddle(fullStr, maxLength) {
      if (fullStr.length <= maxLength) {
        return fullStr;
      }
      const separator = "...";
      const halfLengthToShow = (maxLength - separator.length) / 2;
      const beginning = fullStr.substr(0, Math.ceil(halfLengthToShow));
      const end = fullStr.substr(fullStr.length - Math.floor(halfLengthToShow));
      return beginning + separator + end;
    },
    /**
     * Convert new line to <br />
     *
     * @param {String} str
     * @returns {string}
     */
    nl2br(str) {
      return str.replace(/\n/g, "<br />");
    },
    /**
     * Decodes the given HTML encoded string.
     *
     * @param {String} s The string to decode.
     * @return {String} The decoded string.
     */
    htmlDecode(s) {
      if (typeof jQuery !== "undefined") {
        return jQuery("<textarea/>").html(s).text();
      }
      return (0, import_html_entities.decode)(s);
    },
    /**
     * HTML encodes the given string.
     *
     * @param {String} s The string to encode.
     * @return {String} @p s HTML encoded.
     */
    htmlEncode(s) {
      if (typeof jQuery !== "undefined") {
        return jQuery("<textarea/>").text(s).html();
      }
      return (0, import_html_entities.encode)(s);
    },
    /**
     * Escape text while preventing any sort of double escape, so 'X & Y' -> 'X &amp; Y' and 'X &amp; Y' -> 'X &amp; Y'
     *
     * @param {String} s the string to escape
     * @return {String} the escaped string
     */
    safeEscape(s) {
      return index_default_default.escape(index_default_default.unescape(s));
    },
    /**
     * HTML encoding insensitive equals.
     *
     * @param {String} first string to compare
     * @param {String} second string to compare
     * @return {Boolean} true when first === second, ignoring HTML encoding
     */
    htmlEncodingInsensitiveEquals(first2, second) {
      return first2 === second || this.htmlDecode(first2) === second || this.htmlEncode(first2) === second;
    },
    /**
     * Creates an ID that can be used as an HTML attribute from @p str.
     *
     * @param {String} str A string to create an ID from.
     * @return {String} The ID string made from @p str.
     */
    makeID(str) {
      const modifiedString = String(str).replace(/[^A-Za-z0-9]/g, "_").toUpperCase();
      return `id_${modifiedString}`;
    },
    /**
     * Extracts an ID made with Str.makeID from a larger string.
     *
     * @param {String} str A string containing an id made with Str.makeID
     * @return {String|null} The ID string.
     */
    extractID(str) {
      const matches = str.match(/id[A-Z0-9_]+/);
      return matches.length > 0 ? matches[0] : null;
    },
    /**
     * Modifies the string so the first letter of each word is capitalized and the
     * rest lowercased.
     *
     * @param {String} val The string to modify
     * @return {String}
     */
    recapitalize(val) {
      let str = String(val);
      if (str.length <= 0) {
        return str;
      }
      str = str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
      function recap_callback(t, a, b) {
        return a + b.toUpperCase();
      }
      return str.replace(
        // **NOTE: Match to _libfop.php
        new RegExp("([^A-Za-z'.0-9])([a-z])", "g"),
        recap_callback
      );
    },
    /**
     * Replace all the non alphanumerical character by _
     *
     * @param {String} input
     * @returns {String}
     */
    sanitizeToAlphaNumeric(input) {
      return String(input).replace(/[^\d\w]/g, "_");
    },
    /**
     * Strip out all the non numerical characters
     *
     * @param {String} input
     * @returns {String}
     */
    stripNonNumeric(input) {
      return String(input).replace(/[^\d]/g, "");
    },
    /**
     * Strips all non ascii characters from a string
     * @param {String} input
     * @returns {String} The ascii version of the string.
     */
    stripNonASCIICharacters(input) {
      return String(input).replace(/[\u0000-\u0019\u0080-\uffff]/g, "");
    },
    /**
     * Shortens the @p text to @p length and appends an ellipses to it.
     *
     * The ellipses will only be appended if @p text is longer than the @p length
     * given.
     *
     * @param {String} val   The string to reduce in size.
     * @param {Number} length The maximal length desired.
     * @return {String} The shortened @p text.
     */
    shortenText(val, length) {
      const text = String(val).replace(/\s+/g, " ");
      const truncatedText = text.substr(0, length - 3);
      return text.length > length ? `${truncatedText}...` : text;
    },
    /**
     * Returns the byte size of a character
     * @param {String} inputChar You can input more than one character, but it will only return the size of the first
     * one.
     * @returns {Number} Byte size of the character
     */
    getRawByteSize(inputChar) {
      const onlyChar = String(inputChar);
      const c = onlyChar.charCodeAt();
      if (c < 1 << 7) {
        return 1;
      }
      if (c < 1 << 11) {
        return 2;
      }
      if (c < 1 << 16) {
        return 3;
      }
      if (c < 1 << 21) {
        return 4;
      }
      if (c < 1 << 26) {
        return 5;
      }
      if (c < 1 << 31) {
        return 6;
      }
      return Number.NaN;
    },
    /**
     * Gets the length of a string in bytes, including non-ASCII characters
     * @param {String} input
     * @returns {Number} The number of bytes used by string
     */
    getByteLength(input) {
      const stringInput = String(input);
      let byteLength = 0;
      for (let i = 0; i < stringInput.length; i++) {
        byteLength += this.getRawByteSize(stringInput[i]);
      }
      return byteLength;
    },
    /**
     * Shortens the input by max byte size instead of by character length
     * @param {String} input
     * @param {Number} maxSize The max size in bytes, e.g. 256
     * @returns {String} Returns a shorted input if the input size exceeds the max
     */
    shortenByByte(input, maxSize) {
      const stringInput = String(input);
      let totalByteLength = 0;
      for (let i = 0; i < stringInput.length; i++) {
        const charByteSize = this.getRawByteSize(stringInput[i]);
        if (charByteSize + totalByteLength > maxSize) {
          return `${stringInput.substr(0, i - 3)}...`;
        }
        totalByteLength += charByteSize;
      }
      return stringInput;
    },
    /**
     * Returns true if the haystack begins with the needle
     *
     * @param {String} haystack  The full string to be searched
     * @param {String} needle    The case-sensitive string to search for
     * @return {Boolean} Retruns true if the haystack starts with the needle.
     */
    startsWith(haystack, needle) {
      return this.isString(haystack) && this.isString(needle) && haystack.substring(0, needle.length) === needle;
    },
    /**
     * Gets the textual value of the given string.
     *
     * @param {String} str The string to fetch the text value from.
     * @return {String} The text from within the HTML string.
     */
    stripHTML(str) {
      if (!this.isString(str)) {
        return "";
      }
      return str.replace(/<[^>]*>?/gm, "");
    },
    /**
     * Modifies the string so the first letter of the string is capitalized
     *
     * @param {String} str The string to modify.
     * @return {String} The recapitalized string.
     */
    UCFirst(str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1);
    },
    /**
     * Returns a string containing all the characters str from the beginning
     * of str to the first occurrence of substr.
     * Example: Str.cutAfter( 'hello$%world', '$%' ) // returns 'hello'
     *
     * @param {String} str The string to modify.
     * @param {String} substr The substring to search for.
     * @return {String} The cut/trimmed string.
     */
    cutAfter(str, substr) {
      const index = str.indexOf(substr);
      if (index !== -1) {
        return str.substring(0, index);
      }
      return str;
    },
    /**
     * Returns a string containing all the characters str from after the first
     * occurrence of substr to the end of the string.
     * Example: Str.cutBefore( 'hello$%world', '$%' ) // returns 'world'
     *
     * @param {String} str The string to modify.
     * @param {String} substr The substring to search for.
     * @return {String} The cut/trimmed string.
     */
    cutBefore(str, substr) {
      const index = str.indexOf(substr);
      if (index !== -1) {
        return str.substring(index + substr.length);
      }
      return str;
    },
    /**
     * Checks that the string is a domain name (e.g. example.com)
     *
     * @param {String} string The string to check for domainnameness.
     *
     * @returns {Boolean} True iff the string is a domain name
     */
    isValidDomainName(string) {
      return Boolean(String(string).match(CONST.REG_EXP.DOMAIN));
    },
    /**
     * Checks that the string is a valid url
     *
     * @param {String} string
     *
     * @returns {Boolean} True if the string is a valid hyperlink
     */
    isValidURL(string) {
      return Boolean(String(string).match(CONST.REG_EXP.HYPERLINK));
    },
    /**
     * Checks that the string is an email address.
     * NOTE: TLDs are not just 2-4 characters. Keep this in sync with _inputrules.php
     *
     * @param {String} string The string to check for email validity.
     *
     * @returns {Boolean} True iff the string is an email
     */
    isValidEmail(string) {
      return Boolean(String(string).match(CONST.REG_EXP.EMAIL));
    },
    /**
     * Checks if the string is an valid email address formed during comment markdown formation.
     *
     * @param {String} string The string to check for email validity.
     *
     * @returns {Boolean} True if the string is an valid email created by comment markdown.
     */
    isValidEmailMarkdown(string) {
      return Boolean(String(string).match(`^${CONST.REG_EXP.MARKDOWN_EMAIL}$`));
    },
    /**
     * Remove trailing comma from a string.
     *
     * @param {String} string The string with any trailing comma to be removed.
     *
     * @returns {String} string with the trailing comma removed
     */
    removeTrailingComma(string) {
      return string.trim().replace(/(,$)/g, "");
    },
    /**
     * Checks that the string is a list of coma separated email addresss.
     *
     * @param {String} str The string to check for emails validity.
     *
     * @returns {Boolean} True if all emails are valid or if input is empty
     */
    areValidEmails(str) {
      const string = this.removeTrailingComma(str);
      if (string === "") {
        return true;
      }
      const emails = string.split(",");
      let result2 = true;
      for (let i = 0; i < emails.length; i += 1) {
        if (!this.isValidEmail(emails[i].trim())) {
          result2 = false;
        }
      }
      return result2;
    },
    /**
     * Extract the email addresses from a string
     *
     * @param {String} string
     * @returns {String[]|null}
     */
    extractEmail(string) {
      return String(string).match(CONST.REG_EXP.EMAIL_SEARCH);
    },
    /**
     * Extracts the domain name from the given email address
     * (e.g. "domain.com" for "joe@domain.com").
     *
     * @param {String} email The email address.
     *
     * @returns {String} The domain name in the email address.
     */
    extractEmailDomain(email) {
      return this.cutBefore(email, "@");
    },
    /**
     * Tries to extract the company name from the given email address
     * (e.g. "yelp" for "joe@yelp.co.uk").
     *
     * @param {String} email The email address.
     *
     * @returns {String|null} The company name in the email address or null.
     */
    extractCompanyNameFromEmailDomain(email) {
      const domain = this.extractEmailDomain(email);
      if (!domain) {
        return null;
      }
      const domainParts = domain.split(".");
      if (!domainParts.length) {
        return null;
      }
      return domainParts[0];
    },
    /**
     * Extracts the local part from the given email address
     * (e.g. "joe" for "joe@domain.com").
     *
     * @param {String} email The email address.
     *
     * @returns {String} The local part in the email address.
     */
    extractEmailLocalPart(email) {
      return this.cutAfter(email, "@");
    },
    /**
     * Sanitize phone number to return only numbers. Return null if non valid phone number.
     *
     * @param {String} str
     * @returns {String|null}
     */
    sanitizePhoneNumber(str) {
      const string = str.replace(/(?!^\+)\D/g, "");
      return string.length <= 15 && string.length >= 10 ? string : null;
    },
    /**
     * Sanitize email. Return null if non valid email.
     *
     * @param {String} str
     * @returns {String|null}
     */
    sanitizeEmail(str) {
      const string = str.toLowerCase().trim();
      return CONST.REG_EXP.EMAIL.test(string) ? string : null;
    },
    /**
     * Escapes all special RegExp characters from a string
     *
     * @param {String} string The subject
     *
     * @returns {String} The escaped string
     */
    escapeForRegExp(string) {
      return string.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
    },
    /**
     * Escapes all special RegExp characters from a string except for the period
     *
     * @param {String} string The subject
     * @returns {String} The escaped string
     */
    escapeForExpenseRule(string) {
      return string.replace(/[-[\]/{}()*+?\\^$|]/g, "\\$&");
    },
    /**
     * Adds a backslash in front of each of colon
     * if they don't already have a backslash in front of them
     *
     * @param {String} string The subject
     * @returns {String} The escaped string
     */
    addBackslashBeforeColonsForTagNamesComingFromQBD(string) {
      return string.replace(/([^\\]):/g, "$1\\:");
    },
    /**
     * Removes backslashes from string
     * eg: myString\[\]\* -> myString[]*
     *
     * @param {String} string
     * @returns {String}
     */
    stripBackslashes(string) {
      return string.replace(/\\/g, "");
    },
    /**
     * Checks if a string's length is in the specified range
     *
     * @param {String} string The subject
     * @param {Number} minimumLength
     * @param {Number} [maximumLength]
     *
     * @returns {Boolean} true if the length is in the range, false otherwise
     */
    isOfLength(string, minimumLength, maximumLength) {
      if (!this.isString(string)) {
        return false;
      }
      if (string.length < minimumLength) {
        return false;
      }
      if (!this.isUndefined(maximumLength) && string.length > maximumLength) {
        return false;
      }
      return true;
    },
    /**
     * Count the number of occurences of needle in haystack.
     * This is faster than counting the results of haystack.match( /needle/g )
     * via http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string
     *
     * @param {String} haystack The string to look inside of
     * @param {String} needle What we're looking for
     * @param {Boolean} allowOverlapping Defaults to false
     *
     * @returns {Integer} The number of times needle is in haystack.
     */
    occurences(haystack, needle, allowOverlapping) {
      let count = 0;
      let pos = 0;
      const haystackStr = String(haystack);
      const needleStr = String(needle);
      if (needleStr.length <= 0) {
        return haystackStr.length + 1;
      }
      const step = allowOverlapping ? 1 : needleStr.length;
      while (pos >= 0) {
        pos = haystackStr.indexOf(needleStr, pos);
        if (pos >= 0) {
          count += 1;
          pos += step;
        }
      }
      return count;
    },
    /**
     * Uppercases the first letter of each word
     * via https://github.com/kvz/phpjs/blob/master/functions/strings/ucwords.js
     *
     * @param   {String}  str to uppercase words
     * @returns {String}  Uppercase worded string
     */
    ucwords(str) {
      return String(str).replace(
        /^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g,
        ($1) => $1.toUpperCase()
      );
    },
    /**
     * Returns true if the haystack contains the needle
     *
     * @param {String} haystack The full string to be searched
     * @param {String} needle The case-sensitive string to search for
     *
     * @return {Boolean} Retruns true if the haystack contains the needle
     */
    contains(haystack, needle) {
      return haystack.indexOf(needle) !== -1;
    },
    /**
     * Returns true if the haystack contains the needle, ignoring case
     *
     * @param {String} haystack The full string to be searched
     * @param {String} needle The case-insensitive string to search for
     *
     * @return {Boolean} Retruns true if the haystack contains the needle, ignoring case
     */
    caseInsensitiveContains(haystack, needle) {
      return this.contains(haystack.toLowerCase(), needle.toLowerCase());
    },
    /**
     * Case insensitive compare function
     *
     * @param {String} string1 string to compare
     * @param {String} string2 string to compare
     *
     * @return {Number} -1 if first string < second string
     *                   1 if first string > second string
     *                   0 if first string = second string
     */
    caseInsensitiveCompare(string1, string2) {
      const lowerCase1 = string1.toLocaleLowerCase();
      const lowerCase2 = string2.toLocaleLowerCase();
      return this.compare(lowerCase1, lowerCase2);
    },
    /**
     * Case insensitive equals
     *
     * @param {String} first string to compare
     * @param {String} second string to compare
     * @return {Boolean} true when first == second except for case
     */
    caseInsensitiveEquals(first2, second) {
      return this.caseInsensitiveCompare(first2, second) === 0;
    },
    /**
     * Compare function
     *
     * @param {String} string1 string to compare
     * @param {String} string2 string to compare
     *
     * @return {Number} -1 if first string < second string
     *                   1 if first string > second string
     *                   0 if first string = second string
     */
    compare(string1, string2) {
      if (string1 < string2) {
        return -1;
      }
      if (string1 > string2) {
        return 1;
      }
      return 0;
    },
    /**
     * Check if a file extension is supported by SmartReports
     * @param  {String}  filename
     * @return {Boolean}
     */
    isFileExtensionSmartReportsValid(filename) {
      const allowedExtensions = ["xls", "xlsx", "xlsm", "xltm"];
      const extension = filename.split(".").pop().toLowerCase();
      return allowedExtensions.indexOf(extension) > -1;
    },
    /**
     * Mask Permanent Account Number (PAN) the same way Auth does
     * @param {Number|String} number account number
     * @return {String} masked account number
     */
    maskPAN(number) {
      const accountNumber = String(number);
      const len = accountNumber.length;
      if (len < 6 || len > 20) {
        return this.maskFirstNCharacters(accountNumber, len, "X");
      }
      if (len < 14) {
        return this.maskFirstNCharacters(accountNumber, len - 4, "X");
      }
      const first2 = accountNumber.substr(0, 6);
      const last2 = accountNumber.substr(7);
      const masked = this.maskFirstNCharacters(last2, len - 11, "X");
      return `${first2}${masked}`;
    },
    /**
     * Checks if something is a string
     * Stolen from underscore
     * @param  {Mixed} obj
     * @return {Boolean}
     */
    isString(obj) {
      return this.isTypeOf(obj, "String");
    },
    /**
     * Checks if something is a number
     * Stolen from underscore
     * @param  {Mixed} obj
     * @return {Boolean}
     */
    isNumber(obj) {
      return this.isTypeOf(obj, "Number");
    },
    /**
     * Checks if something is a certain type
     * Stolen from underscore
     * @param  {Mixed} obj
     * @param  {String} type one of ['Arguments', 'Function', 'String', 'Number', 'Date',
     *                       'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet']
     * @return {Boolean}
     */
    isTypeOf(obj, type) {
      return Object.prototype.toString.call(obj) === `[object ${type}]`;
    },
    /**
     * Checks to see if something is undefined
     * Stolen from underscore
     * @param  {Mixed} obj
     * @return {Boolean}
     */
    isUndefined(obj) {
      return obj === void 0;
    },
    /**
     * Replace first N characters of the string with maskChar
     * eg: maskFirstNCharacters( '1234567890', 6, 'X' ) yields XXXXXX7890
     * @param {String} str string to mask
     * @param {Number} n number of characters we want to mask from the string
     * @param {String} mask string we want replace the first N chars with
     * @return {String} masked string
     */
    maskFirstNCharacters(str, n, mask) {
      if (!this.isString(str) || !this.isString(mask) || str.length === 0 || !this.isNumber(n)) {
        return str;
      }
      return str.substring(0, n).replace(/./g, mask) + str.substring(n);
    },
    /**
     * Trim a string
     *
     * @param {String} str
     * @returns {string}
     */
    trim(str) {
      return $.trim(str);
    },
    /**
     * Convert a percentage string like '25%' to 25/
     * @param {String} percentageString The percentage as a string
     * @returns {Number}
     */
    percentageStringToNumber(percentageString) {
      return Number(this.cutAfter(percentageString, "%"));
    },
    /**
     * Remoce all the spaces from a string
     * @param {string} input
     * @returns {string}
     */
    removeSpaces(input) {
      return String(input).replace(" ", "");
    },
    /**
     * Returns the proper phrase depending on the count that is passed.
     * Example:
     * console.log(Str.pluralize('puppy', 'puppies', 1)); // puppy
     * console.log(Str.pluralize('puppy', 'puppies', 3)); // puppies
     *
     * @param {String} singular form of the phrase
     * @param {String} plural form of the phrase
     * @param {Number} n the count which determines the plurality
     *
     * @return {String}
     */
    pluralize(singular, plural, n) {
      if (!n || n > 1) {
        return plural;
      }
      return singular;
    },
    /**
     * Returns whether or not a string is an encrypted number or not.
     *
     * @param {String} number that we want to see if its encrypted or not
     *
     * @return {Boolean} Whether or not this string is an encrpypted number
     */
    isEncryptedCardNumber(number) {
      if (/^[\da-fA-F]+$/.test(number)) {
        return number.length % 32 === 0;
      }
      if (/^[vV][\d]+:[\da-fA-F]+$/.test(number)) {
        return number.split(":")[1].length % 32 === 0;
      }
      return false;
    },
    /**
     * Converts a value to boolean, case-insensitive.
     * @param {mixed} value
     * @return {Boolean}
     */
    toBool(value) {
      if (this.isString(value)) {
        return value.toLowerCase() === "true";
      }
      return Boolean(value);
    },
    /**
     * Checks if a string could be the masked version of another one.
     *
     * @param {String} first string to compare
     * @param {String} second string to compare
     * @param {String} [mask] defaults to X
     * @return {Boolean} true when first could be the masked version of second
     */
    maskedEquals(first2, second, mask) {
      const firsts = first2.match(/.{1,1}/g);
      const seconds = second.match(/.{1,1}/g);
      const defaultMask = mask || "X";
      if (firsts.length !== seconds.length) {
        return false;
      }
      for (let i = 0; i < firsts.length; i += 1) {
        if (firsts[i] !== seconds[i] && firsts[i] !== defaultMask && seconds[i] !== defaultMask) {
          return false;
        }
      }
      return true;
    },
    /**
     * Bold any word matching the regexp in the text.
     * @param {string} text, htmlEncoded
     * @param {RegExp} regexp
     * @return {string}
     */
    boldify(text, regexp) {
      return text.replace(regexp, "<strong>$1</strong>");
    },
    /**
     * Check for whether a phone number is valid.
     * @param {String} phone
     *
     * @return {bool}
     */
    isValidPhone(phone) {
      return CONST.SMS.E164_REGEX.test(phone);
    },
    /**
     * We validate mentions by checking if it's first character is an allowed character.
     *
     * @param {String} mention
     * @returns {bool}
     */
    isValidMention(mention) {
      if (/[\s@]/g.test(mention.charAt(0))) {
        return true;
      }
      const firstChar = mention.charAt(0);
      const lastChar = mention.charAt(mention.length - 1);
      return /[*~_'"]/g.test(firstChar) && /[*~_'"]/g.test(lastChar) && firstChar === lastChar;
    },
    /**
     * Returns text without our SMS domain
     *
     * @param {String} text
     * @return {String}
     */
    removeSMSDomain(text) {
      return text.replace(REMOVE_SMS_DOMAIN_PATTERN, "");
    },
    /**
     * Returns true if the text is a valid phone number with our SMS domain removed
     *
     * @param {String} text
     * @return {String}
     */
    isSMSLogin(text) {
      return this.isValidPhone(this.removeSMSDomain(text));
    },
    /**
     * This method will return all matches of a single regex like preg_match_all() in PHP. This is not a common part of
     * JS yet, so this is a good way of doing it according to
     * https://github.com/airbnb/javascript/issues/1439#issuecomment-306297399 and doesn't get us in trouble with
     * linting rules.
     *
     * @param {String} str
     * @param {RegExp} regex
     *
     * @returns {Array}
     */
    matchAll(str, regex) {
      const matches = [];
      str.replace(regex, (...args) => {
        const match = Array.prototype.slice.call(args, 0, -2);
        match.input = args[args.length - 1];
        match.index = args[args.length - 2];
        matches.push(match);
      });
      return matches;
    },
    /**
     * A simple GUID generator taken from https://stackoverflow.com/a/32760401/9114791
     *
     * @param {String} [prefix] an optional prefix to put in front of the guid
     * @returns {String}
     */
    guid(prefix = "") {
      function s4() {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
      }
      return `${prefix}${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    },
    /**
     * Takes in a URL and returns it with a leading '/'
     *
     * @param {mixed} url The URL to be formatted
     * @returns {String} The formatted URL
     */
    normalizeUrl(url) {
      return typeof url === "string" && url.startsWith("/") ? url : `/${url}`;
    },
    /**
     *  Formats a URL by converting the domain name to lowercase and adding the missing 'https://' protocol.
     *
     * @param {url} url The URL to be formatted
     * @returns {String} The formatted URL
     */
    sanitizeURL(url) {
      const regex = new RegExp(`^${URL_REGEX}$`, "i");
      const match = regex.exec(url);
      if (!match) {
        return url;
      }
      const website = match[3] ? match[2] : `https://${match[2]}`;
      return website.toLowerCase() + this.cutBefore(match[1], match[2]);
    },
    /**
     * Checks if parameter is a string or function
     * if it is a function then we will call it with
     * any additional arguments.
     *
     * @param {String|Function} parameter
     * @returns {String}
     */
    result(parameter, ...args) {
      return index_default_default.isFunction(parameter) ? parameter(...args) : parameter;
    },
    /**
     * Get file extension for a given url with or
     * without query parameters
     *
     * @param {String} url
     * @returns {String|undefined}
     */
    getExtension(url) {
      return index_default_default.first(index_default_default.last(url.split(".")).split("?")).toLowerCase();
    },
    /**
     * Takes in a URL and checks if the file extension is PDF
     *
     * @param {String} url The URL to be checked
     * @returns {Boolean} Whether file path is PDF or not
     */
    isPDF(url) {
      return this.getExtension(url) === "pdf";
    },
    /**
     * Takes in a URL and checks if the file extension is an image
     * that can be rendered by React Native. Do NOT add extensions
     * to this list unless they appear in this list and are
     * supported by all platforms.
     *
     * https://reactnative.dev/docs/image#source
     *
     * @param {String} url
     * @returns {Boolean}
     */
    isImage(url) {
      return index_default_default.contains(["jpeg", "jpg", "gif", "png", "bmp", "webp"], this.getExtension(url));
    },
    /**
     * Takes in a URL and checks if the file extension is a video
     * that can be rendered by React Native. Do NOT add extensions
     * to this list unless they are supported by all platforms.
     *
     * https://developer.android.com/media/platform/supported-formats#video-formats
     * https://developer.apple.com/documentation/coremedia/1564239-video_codec_constants
     * https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs
     *
     * @param {String} url
     * @returns {Boolean}
     */
    isVideo(url) {
      return index_default_default.contains(["mov", "mp4", "webm", "mkv"], this.getExtension(url));
    },
    /**
     * Checks whether the given string is a +@ domain email account, such as
     * +@domain.com
     *
     * @param {String} email
     * @return {Boolean} True if is a domain account email, otherwise false.
     */
    isDomainEmail(email) {
      return this.startsWith(email, "+@");
    },
    /**
     * Polyfill for String.prototype.replaceAll
     *
     * @param {String} text
     * @param {String|RegExp} searchValue
     * @param {String|Function} replaceValue
     * @returns {String}
     */
    replaceAll(text, searchValue, replaceValue) {
      return String.prototype.replaceAll.call(text, searchValue, replaceValue);
    }
  };
  var str_default = Str;

  // node_modules/expensify-common/lib/ExpensiMark.js
  var MARKDOWN_LINK = `\\[([^\\][]*(?:\\[[^\\][]*][^\\][]*)*)]\\(${MARKDOWN_URL_REGEX}\\)(?![^<]*(<\\/pre>|<\\/code>))`;
  var MARKDOWN_LINK_REGEX = new RegExp(MARKDOWN_LINK, "gi");
  var MARKDOWN_IMAGE_REGEX = new RegExp(`\\!${MARKDOWN_LINK}`, "gi");
  var SLACK_SPAN_NEW_LINE_TAG = '<span class="c-mrkdwn__br" data-stringify-type="paragraph-break" style="box-sizing: inherit; display: block; height: unset;"></span>';
  var ExpensiMark = {
    initializer() {
      this.rules = [
        // Apply the emoji first avoid applying any other formatting rules inside of it
        {
          name: "emoji",
          regex: CONST.REG_EXP.EMOJI_RULE,
          replacement: (match) => `<emoji>${match}</emoji>`
        },
        /**
         * Apply the code-fence to avoid replacing anything inside of it that we're not supposed to
         * (aka any rule with the '(?![^<]*<\/pre>)' avoidance in it
         */
        {
          name: "codeFence",
          // &#x60; is a backtick symbol we are matching on three of them before then after a new line character
          regex: /(&#x60;&#x60;&#x60;[\n]?)((?:\s*?(?![\n]?&#x60;&#x60;&#x60;(?!&#x60;))[\S])+\s*?)((?=\n?)&#x60;&#x60;&#x60;)/g,
          // We're using a function here to perform an additional replace on the content
          // inside the backticks because Android is not able to use <pre> tags and does
          // not respect whitespace characters at all like HTML does. We do not want to mess
          // with the new lines here since they need to be converted into <br>. And we don't
          // want to do this anywhere else since that would break HTML.
          // &nbsp; will create styling issues so use &#32;
          replacement: (match, __, textWithinFences) => {
            const group2 = textWithinFences.replace(/(?:(?![\n\r])\s)/g, "&#32;");
            return `<pre>${group2}</pre>`;
          },
          rawInputReplacement: (match, __, textWithinFences) => {
            const withinFences = match.replace(/(?:&#x60;&#x60;&#x60;)([\s\S]*?)(?:&#x60;&#x60;&#x60;)/g, "$1").replace(/<emoji>|<\/emoji>/g, "");
            const group2 = textWithinFences.replace(/(?:(?![\n\r])\s)/g, "&#32;");
            return `<pre data-code-raw="${withinFences}">${group2}</pre>`;
          }
        },
        /**
         * Apply inline code-block to avoid applying any other formatting rules inside of it,
         * like we do for the multi-line code-blocks
         */
        {
          name: "inlineCodeBlock",
          // Use the url escaped version of a backtick (`) symbol. Mobile platforms do not support lookbehinds,
          // so capture the first and third group and place them in the replacement.
          // but we should not replace backtick symbols if they include <pre> tags between them.
          regex: /(\B|_|)&#x60;(?:(?!(?:(?!&#x60;).)*?<pre>))(.*?\S.*?)&#x60;(\B|_|)(?!&#x60;|[^<]*<\/pre>)/g,
          replacement: (match, g1, g2, g3) => {
            const regex = /^[&#x60;]+$/i;
            if (regex.test(g2)) {
              return match;
            }
            return `${g1}<code>${g2}</code>${g3}`;
          }
        },
        /**
         * Converts markdown style links to anchor tags e.g. [Expensify](concierge@expensify.com)
         * We need to convert before the auto email link rule and the manual link rule since it will not try to
         * create a link from an existing anchor tag.
         */
        {
          name: "email",
          process: (textToProcess, replacement, shouldKeepRawInput) => {
            const regex = new RegExp(
              `(?!\\[\\s*\\])\\[([^[\\]]*)]\\((mailto:)?${CONST.REG_EXP.MARKDOWN_EMAIL}\\)`,
              "gim"
            );
            return this.modifyTextForEmailLinks(regex, textToProcess, replacement, shouldKeepRawInput);
          },
          replacement: (match, g1, g2) => {
            if (g1.match(CONST.REG_EXP.EMOJIS) || !g1.trim()) {
              return match;
            }
            const label = g1.trim();
            const href = `mailto:${g2}`;
            const formattedLabel = label === href ? g2 : label;
            return `<a href="${href}">${formattedLabel}</a>`;
          },
          rawInputReplacement: (match, g1, g2, g3) => {
            if (g1.match(CONST.REG_EXP.EMOJIS) || !g1.trim()) {
              return match;
            }
            const dataRawHref = g2 ? g2 + g3 : g3;
            const href = `mailto:${g3}`;
            return `<a href="${href}" data-raw-href="${dataRawHref}" data-link-variant="labeled">${g1}</a>`;
          }
        },
        {
          name: "heading1",
          process: (textToProcess, replacement, shouldKeepRawInput = false) => {
            const regexp = shouldKeepRawInput ? /^# ( *(?! )(?:(?!<pre>|\n|\r\n).)+)/gm : /^# +(?! )((?:(?!<pre>|\n|\r\n).)+)/gm;
            return textToProcess.replace(regexp, replacement);
          },
          replacement: "<h1>$1</h1>"
        },
        /**
         * Converts markdown style images to img tags e.g. ![Expensify](https://www.expensify.com/attachment.png)
         * We need to convert before linking rules since they will not try to create a link from an existing img
         * tag.
         * Additional sanitization is done to the alt attribute to prevent parsing it further to html by later rules.
         */
        {
          name: "image",
          regex: MARKDOWN_IMAGE_REGEX,
          replacement: (match, g1, g2) => `<img src="${str_default.sanitizeURL(g2)}" alt="${this.escapeMarkdownEntities(g1)}" />`,
          rawInputReplacement: (match, g1, g2) => `<img src="${str_default.sanitizeURL(g2)}" alt="${this.escapeMarkdownEntities(g1)}" data-raw-href="${g2}" data-link-variant="labeled" />`
        },
        /**
         * Converts markdown style links to anchor tags e.g. [Expensify](https://www.expensify.com)
         * We need to convert before the autolink rule since it will not try to create a link
         * from an existing anchor tag.
         */
        {
          name: "link",
          process: (textToProcess, replacement) => this.modifyTextForUrlLinks(MARKDOWN_LINK_REGEX, textToProcess, replacement),
          replacement: (match, g1, g2) => {
            if (g1.match(CONST.REG_EXP.EMOJIS) || !g1.trim()) {
              return match;
            }
            return `<a href="${str_default.sanitizeURL(g2)}" target="_blank" rel="noreferrer noopener">${g1.trim()}</a>`;
          },
          rawInputReplacement: (match, g1, g2) => {
            if (g1.match(CONST.REG_EXP.EMOJIS) || !g1.trim()) {
              return match;
            }
            return `<a href="${str_default.sanitizeURL(g2)}" data-raw-href="${g2}" data-link-variant="labeled" target="_blank" rel="noreferrer noopener">${g1.trim()}</a>`;
          }
        },
        /**
         * Apply the hereMention first because the string @here is still a valid mention for the userMention regex.
         * This ensures that the hereMention is always considered first, even if it is followed by a valid
         * userMention.
         *
         * Also, apply the mention rule after email/link to prevent mention appears in an email/link.
         */
        {
          name: "hereMentions",
          regex: /([a-zA-Z0-9.!$%&+/=?^`{|}_-]?)(@here)([.!$%&+/=?^`{|}_-]?)(?=\b)(?!([\w'#%+-]*@(?:[a-z\d-]+\.)+[a-z]{2,}(?:\s|$|@here))|((?:(?!<a).)+)?<\/a>|[^<]*(<\/pre>|<\/code>))/gm,
          replacement: (match, g1, g2, g3) => {
            if (!str_default.isValidMention(match)) {
              return match;
            }
            return `${g1}<mention-here>${g2}</mention-here>${g3}`;
          }
        },
        /**
         * This regex matches a valid user mention in a string.
         * A user mention is a string that starts with the '@' symbol and is followed by a valid user's primary
         * login
         *
         * Note: currently we are only allowing mentions in a format of @+19728974297 (E.164 format phone number)
         * and @username@example.com The username can contain any combination of alphanumeric letters, numbers, and
         * underscores
         */
        {
          name: "userMentions",
          regex: new RegExp(`(@here|[a-zA-Z0-9.!$%&+=?^\`{|}-]?)(@${CONST.REG_EXP.EMAIL_PART}|@${CONST.REG_EXP.PHONE_PART})(?!((?:(?!<a).)+)?<\\/a>|[^<]*(<\\/pre>|<\\/code>))`, "gim"),
          replacement: (match, g1, g2) => {
            if (!str_default.isValidMention(match)) {
              return match;
            }
            const phoneRegex = new RegExp(`^@${CONST.REG_EXP.PHONE_PART}$`);
            return `${g1}<mention-user>${g2}${phoneRegex.test(g2) ? `@${CONST.SMS.DOMAIN}` : ""}</mention-user>`;
          }
        },
        {
          name: "hereMentionAfterUserMentions",
          regex: /(<\/mention-user>)(@here)(?=\b)/gm,
          replacement: "$1<mention-here>$2</mention-here>"
        },
        /**
         * Automatically link urls. Runs last of our linkers since we want anything manual to link before this,
         * and we do not want to break emails.
         */
        {
          name: "autolink",
          process: (textToProcess, replacement) => {
            const regex = new RegExp(
              `(?![^<]*>|[^<>]*<\\/(?!h1>))([_*~]*?)${MARKDOWN_URL_REGEX}\\1(?!((?:(?!<a).)+)?<\\/a>|[^<]*(<\\/pre>|<\\/code>|.+\\/>))`,
              "gi"
            );
            return this.modifyTextForUrlLinks(regex, textToProcess, replacement);
          },
          replacement: (match, g1, g2) => {
            const href = str_default.sanitizeURL(g2);
            return `${g1}<a href="${href}" target="_blank" rel="noreferrer noopener">${g2}</a>${g1}`;
          },
          rawInputReplacement: (_match, g1, g2) => {
            const href = str_default.sanitizeURL(g2);
            return `${g1}<a href="${href}" data-raw-href="${g2}" data-link-variant="auto" target="_blank" rel="noreferrer noopener">${g2}</a>${g1}`;
          }
        },
        {
          name: "quote",
          // We also want to capture a blank line before or after the quote so that we do not add extra spaces.
          // block quotes naturally appear on their own line. Blockquotes should not appear in code fences or
          // inline code blocks. A single prepending space should be stripped if it exists
          process: (textToProcess, replacement, shouldKeepRawInput = false) => {
            const regex = new RegExp(
              /^&gt; *(?! )(?![^<]*(?:<\/pre>|<\/code>))([^\v\n\r]+)/gm
            );
            if (shouldKeepRawInput) {
              return textToProcess.replace(regex, (g1) => replacement(g1, shouldKeepRawInput));
            }
            return this.modifyTextForQuote(regex, textToProcess, replacement);
          },
          replacement: (g1, shouldKeepRawInput = false) => {
            let isStartingWithSpace = false;
            const textToReplace = g1.replace(/^&gt;( )?/gm, (match, g2) => {
              if (shouldKeepRawInput) {
                isStartingWithSpace = !!g2;
                return "";
              }
              return match;
            });
            const filterRules = ["heading1"];
            if (this.currentQuoteDepth < this.maxQuoteDepth - 1) {
              filterRules.push("quote");
              this.currentQuoteDepth++;
            }
            const replacedText = this.replace(textToReplace, { filterRules, shouldEscapeText: false, shouldKeepRawInput });
            this.currentQuoteDepth = 0;
            return `<blockquote>${isStartingWithSpace ? " " : ""}${replacedText}</blockquote>`;
          }
        },
        {
          /**
           * Use \b in this case because it will match on words, letters,
           * and _: https://www.rexegg.com/regex-boundaries.html#wordboundary
           * The !_blank is to prevent the `target="_blank">` section of the
           * link replacement from being captured Additionally, something like
           * `\b\_([^<>]*?)\_\b` doesn't work because it won't replace
           * `_https://www.test.com_`
           * Use [\s\S]* instead of .* to match newline
           */
          name: "italic",
          regex: /(\b_+|\b)(?!_blank")_((?![\s_])[\s\S]*?[^\s_])_(?![^\W_])(?![^<]*(<\/pre>|<\/code>|<\/a>|<\/mention-user>|_blank))/g,
          // We want to add extraLeadingUnderscores back before the <em> tag unless textWithinUnderscores starts with valid email
          replacement: (match, extraLeadingUnderscores, textWithinUnderscores) => {
            if (textWithinUnderscores.includes("</pre>") || this.containsNonPairTag(textWithinUnderscores)) {
              return match;
            }
            if (String(textWithinUnderscores).match(`^${CONST.REG_EXP.MARKDOWN_EMAIL}`)) {
              return `<em>${extraLeadingUnderscores}${textWithinUnderscores}</em>`;
            }
            return `${extraLeadingUnderscores}<em>${textWithinUnderscores}</em>`;
          }
        },
        /**
         * Automatically links emails that are not in a link. Runs before the autolinker as it will not link an
         * email that is in a link
         * Prevent emails from starting with [~_*]. Such emails should not be supported.
         */
        {
          name: "autoEmail",
          regex: new RegExp(
            `([^\\w'#%+-]|^)${CONST.REG_EXP.MARKDOWN_EMAIL}(?!((?:(?!<a).)+)?<\\/a>|[^<>]*<\\/(?!em|h1|blockquote))`,
            "gim"
          ),
          replacement: '$1<a href="mailto:$2">$2</a>',
          rawInputReplacement: '$1<a href="mailto:$2" data-raw-href="$2" data-link-variant="auto">$2</a>'
        },
        {
          // Use \B in this case because \b doesn't match * or ~.
          // \B will match everything that \b doesn't, so it works
          // for * and ~: https://www.rexegg.com/regex-boundaries.html#notb
          name: "bold",
          regex: /\B\*((?![\s*])[\s\S]*?[^\s*])\*\B(?![^<]*(<\/pre>|<\/code>|<\/a>))/g,
          replacement: (match, g1) => g1.includes("</pre>") || this.containsNonPairTag(g1) ? match : `<strong>${g1}</strong>`
        },
        {
          name: "strikethrough",
          regex: /\B~((?![\s~])[\s\S]*?[^\s~])~\B(?![^<]*(<\/pre>|<\/code>|<\/a>))/g,
          replacement: (match, g1) => g1.includes("</pre>") || this.containsNonPairTag(g1) ? match : `<del>${g1}</del>`
        },
        {
          name: "newline",
          regex: /\r?\n/g,
          replacement: "<br />"
        },
        {
          // We're removing <br /> because when </pre> and <br /> occur together, an extra line is added.
          name: "replacepre",
          regex: /<\/pre>\s*<br\s*[/]?>/gi,
          replacement: "</pre>"
        },
        {
          // We're removing <br /> because when <h1> and <br /> occur together, an extra line is added.
          name: "replaceh1br",
          regex: /<\/h1><br\s*[/]?>/gi,
          replacement: "</h1>"
        }
      ];
      this.htmlToMarkdownRules = [
        // Used to Exclude tags
        {
          name: "replacepre",
          regex: /<\/pre>(.)/gi,
          replacement: "</pre><br />$1"
        },
        {
          name: "exclude",
          regex: new RegExp(
            [
              `<(script|style)(?:"[^"]*"|'[^']*'|[^'">])*>([\\s\\S]*?)<\\/\\1>`,
              "(?![^<]*(<\\/pre>|<\\/code>))(\n|\r\n)?"
            ].join(""),
            "gim"
          ),
          replacement: ""
        },
        {
          name: "nested",
          regex: /<(pre)(?:"[^"]*"|'[^']*'|[^'">])*><(div|code)(?:"[^"]*"|'[^']*'|[^'">])*>([\s\S]*?)<\/\2><\/pre>/gi,
          replacement: "<pre>$3</pre>"
        },
        {
          name: "newline",
          // Replaces open and closing <br><br/> tags with a single <br/>
          // Slack uses special <span> tag for empty lines instead of <br> tag
          pre: (inputString) => inputString.replace("<br></br>", "<br/>").replace("<br><br/>", "<br/>").replace(/(<tr.*?<\/tr>)/g, "$1<br/>").replace("<br/></tbody>", "").replace(SLACK_SPAN_NEW_LINE_TAG + SLACK_SPAN_NEW_LINE_TAG, "<br/><br/><br/>").replace(SLACK_SPAN_NEW_LINE_TAG, "<br/><br/>"),
          // Include the immediately followed newline as `<br>\n` should be equal to one \n.
          regex: /<br(?:"[^"]*"|'[^']*'|[^'"><])*>\n?/gi,
          replacement: "\n"
        },
        {
          name: "heading1",
          regex: /[^\S\r\n]*<(h1)(?:"[^"]*"|'[^']*'|[^'">])*>(.*?)<\/\1>(?![^<]*(<\/pre>|<\/code>))/gi,
          replacement: "<h1># $2</h1>"
        },
        {
          name: "listItem",
          regex: /\s*<(li)(?:"[^"]*"|'[^']*'|[^'">])*>(.*?)<\/\1>(?![^<]*(<\/pre>|<\/code>))\s*/gi,
          replacement: "<li>  $2</li>"
        },
        // Use [\s\S]* instead of .* to match newline
        {
          name: "italic",
          regex: /<(em|i)(?:"[^"]*"|'[^']*'|[^'">])*>([\s\S]*?)<\/\1>(?![^<]*(<\/pre>|<\/code>))/gi,
          replacement: "_$2_"
        },
        {
          name: "bold",
          regex: /<(b|strong)(?:"[^"]*"|'[^']*'|[^'">])*>([\s\S]*?)<\/\1>(?![^<]*(<\/pre>|<\/code>))/gi,
          replacement: "*$2*"
        },
        {
          name: "strikethrough",
          regex: /<(del|s)(?:"[^"]*"|'[^']*'|[^'">])*>([\s\S]*?)<\/\1>(?![^<]*(<\/pre>|<\/code>))/gi,
          replacement: "~$2~"
        },
        {
          name: "quote",
          regex: /<(blockquote|q)(?:"[^"]*"|'[^']*'|[^'">])*>([\s\S]*?)<\/\1>(?![^<]*(<\/pre>|<\/code>))/gi,
          replacement: (match, g1, g2) => {
            const resultString = g2.replace(/\n?(<h1># )/g, "$1").replace(/(<h1>|<\/h1>)+/g, "\n").trim().split("\n").map((m) => `> ${m}`).join("\n");
            return `<blockquote>${resultString}</blockquote>`;
          }
        },
        {
          name: "inlineCodeBlock",
          regex: /<(code)(?:"[^"]*"|'[^']*'|[^'">])*>(.*?)<\/\1>(?![^<]*(<\/pre>|<\/code>))/gi,
          replacement: "`$2`"
        },
        {
          name: "codeFence",
          regex: /<(pre)(?:"[^"]*"|'[^']*'|[^'">])*>([\s\S]*?)(\n?)<\/\1>(?![^<]*(<\/pre>|<\/code>))/gi,
          replacement: (match, g1, g2) => `\`\`\`
${g2}
\`\`\``
        },
        {
          name: "anchor",
          regex: /<(a)[^><]*href\s*=\s*(['"])(.*?)\2(?:".*?"|'.*?'|[^'"><])*>([\s\S]*?)<\/\1>(?![^<]*(<\/pre>|<\/code>))/gi,
          replacement: (match, g1, g2, g3, g4) => {
            const email = g3.startsWith("mailto:") ? g3.slice(7) : "";
            if (email === g4) {
              return email;
            }
            return `[${g4}](${email || g3})`;
          }
        },
        {
          name: "image",
          regex: /<img[^><]*src\s*=\s*(['"])(.*?)\1(?:[^><]*alt\s*=\s*(['"])(.*?)\3)?[^><]*>*(?![^<][\s\S]*?(<\/pre>|<\/code>))/gi,
          replacement: (match, g1, g2, g3, g4) => `![${g4 || g2}](${g2})`
        }
      ];
      this.htmlToTextRules = [
        {
          name: "breakline",
          regex: /<br[^>]*>/gi,
          replacement: "\n"
        },
        {
          name: "blockquoteWrapHeadingOpen",
          regex: /<blockquote><h1>/gi,
          replacement: "<blockquote>"
        },
        {
          name: "blockquoteWrapHeadingClose",
          regex: /<\/h1><\/blockquote>/gi,
          replacement: "</blockquote>"
        },
        {
          name: "blockElementOpen",
          regex: /(.|\s)<(blockquote|h1|pre)>/gi,
          replacement: "$1\n"
        },
        {
          name: "blockElementClose",
          regex: /<\/(blockquote|h1|pre)>(.|\s)/gm,
          replacement: "\n$2"
        },
        {
          name: "removeStyle",
          regex: /<style>.*?<\/style>/gi,
          replacement: ""
        },
        {
          name: "image",
          regex: /<img[^><]*src\s*=\s*(['"])(.*?)\1(?:[^><]*alt\s*=\s*(['"])(.*?)\3)?[^><]*>*(?![^<][\s\S]*?(<\/pre>|<\/code>))/gi,
          replacement: "(image of: $4)"
        },
        {
          name: "stripTag",
          regex: /(<([^>]+)>)/gi,
          replacement: ""
        }
      ];
      this.whitespaceRulesToDisable = ["newline", "replacepre", "replacebr", "replaceh1br"];
      this.shouldKeepWhitespaceRules = this.rules.filter((rule) => !this.whitespaceRulesToDisable.includes(rule.name));
      this.maxQuoteDepth = 3;
      this.currentQuoteDepth = 0;
    },
    /**
     * Replaces markdown with html elements
     *
     * @param {String} text - Text to parse as markdown
     * @param {Object} [options] - Options to customize the markdown parser
     * @param {String[]} [options.filterRules=[]] - An array of name of rules as defined in this class.
     * If not provided, all available rules will be applied.
     * @param {Boolean} [options.shouldEscapeText=true] - Whether or not the text should be escaped
     *
     * @returns {String}
     */
    replace(text, { filterRules = [], shouldEscapeText = true, shouldKeepRawInput = false } = {}) {
      let replacedText = shouldEscapeText ? index_default_default.escape(text) : text;
      const enabledRules = shouldKeepRawInput ? this.shouldKeepWhitespaceRules : this.rules;
      const rules = index_default_default.isEmpty(filterRules) ? enabledRules : index_default_default.filter(this.rules, (rule) => index_default_default.contains(filterRules, rule.name));
      try {
        rules.forEach((rule) => {
          if (rule.pre) {
            replacedText = rule.pre(replacedText);
          }
          const replacementFunction = shouldKeepRawInput && rule.rawInputReplacement ? rule.rawInputReplacement : rule.replacement;
          if (rule.process) {
            replacedText = rule.process(replacedText, replacementFunction, shouldKeepRawInput);
          } else {
            replacedText = replacedText.replace(rule.regex, replacementFunction);
          }
          if (rule.post) {
            replacedText = rule.post(replacedText);
          }
        });
      } catch (e) {
        console.warn("Error replacing text with html in ExpensiMark.replace", { error: e });
        return shouldEscapeText ? index_default_default.escape(text) : text;
      }
      return replacedText;
    },
    /**
     * Checks matched URLs for validity and replace valid links with html elements
     *
     * @param {RegExp} regex
     * @param {String} textToCheck
     * @param {Function} replacement
     *
     * @returns {String}
     */
    modifyTextForUrlLinks(regex, textToCheck, replacement) {
      let match = regex.exec(textToCheck);
      let replacedText = "";
      let startIndex = 0;
      while (match !== null) {
        let unmatchedOpenParentheses = 0;
        let url = match[2];
        for (let i = 0; i < url.length; i++) {
          if (url[i] === "(") {
            unmatchedOpenParentheses++;
          } else if (url[i] === ")") {
            if (unmatchedOpenParentheses <= 0) {
              const numberOfCharsToRemove = url.length - i;
              match[0] = match[0].substr(0, match[0].length - numberOfCharsToRemove);
              url = url.substr(0, url.length - numberOfCharsToRemove);
              break;
            }
            unmatchedOpenParentheses--;
          }
        }
        if (!url.includes("?") && !url.includes("#")) {
          let numberOfCharsToRemove = 0;
          for (let i = url.length - 1; i >= 0; i--) {
            if (CONST.SPECIAL_CHARS_TO_REMOVE.includes(url[i])) {
              numberOfCharsToRemove++;
            } else {
              break;
            }
          }
          if (numberOfCharsToRemove) {
            match[0] = match[0].substring(0, match[0].length - numberOfCharsToRemove);
            url = url.substring(0, url.length - numberOfCharsToRemove);
          }
        }
        replacedText = replacedText.concat(textToCheck.substr(startIndex, match.index - startIndex));
        let isDoneMatching = false;
        let shouldApplyAutoLinkAgain = true;
        if (match.index !== 0 && textToCheck[match.index - 1] === "@") {
          const domainRegex = new RegExp("^(([a-z-0-9]+\\.)+[a-z]{2,})(\\S*)", "i");
          const domainMatch = domainRegex.exec(url);
          if (domainMatch !== null && domainMatch[3] !== "") {
            replacedText = replacedText.concat(domainMatch[1] + this.replace(domainMatch[3], { filterRules: ["autolink"] }));
            shouldApplyAutoLinkAgain = false;
          } else {
            isDoneMatching = true;
          }
        }
        if (isDoneMatching || match[1].includes("</pre>") || match[1].includes("</h1>")) {
          replacedText = replacedText.concat(textToCheck.substr(match.index, match[0].length));
        } else if (shouldApplyAutoLinkAgain) {
          const urlRegex = new RegExp(`^${LOOSE_URL_REGEX}$|^${URL_REGEX}$`, "i");
          const linkText = urlRegex.test(match[1]) ? match[1] : this.replace(match[1], {
            filterRules: ["bold", "strikethrough", "italic"],
            shouldEscapeText: false
          });
          replacedText = replacedText.concat(replacement(match[0], linkText, url));
        }
        startIndex = match.index + match[0].length;
        match = regex.exec(textToCheck);
      }
      if (startIndex < textToCheck.length) {
        replacedText = replacedText.concat(textToCheck.substr(startIndex));
      }
      return replacedText;
    },
    /**
     * Checks matched Emails for validity and replace valid links with html elements
     *
     * @param {RegExp} regex
     * @param {String} textToCheck
     * @param {Function} replacement
     * @param {Boolean} shouldKeepRawInput
     *
     * @returns {String}
     */
    modifyTextForEmailLinks(regex, textToCheck, replacement, shouldKeepRawInput) {
      let match = regex.exec(textToCheck);
      let replacedText = "";
      let startIndex = 0;
      while (match !== null) {
        replacedText = replacedText.concat(textToCheck.substr(startIndex, match.index - startIndex));
        const linkText = this.replace(match[1], {
          filterRules: ["bold", "strikethrough", "italic"],
          shouldEscapeText: false
        });
        const replacedMatch = shouldKeepRawInput ? replacement(match[0], linkText, match[2], match[3]) : replacement(match[0], linkText, match[3]);
        replacedText = replacedText.concat(replacedMatch);
        startIndex = match.index + match[0].length;
        match = regex.exec(textToCheck);
      }
      if (startIndex < textToCheck.length) {
        replacedText = replacedText.concat(textToCheck.substr(startIndex));
      }
      return replacedText;
    },
    /**
     * replace block element with '\n' if :
     * 1. We have text within the element.
     * 2. The text does not end with a new line.
     * 3. The text does not have quote mark '>' .
     * 4. It's not the last element in the string.
     *
     * @param {String} htmlString
     * @returns {String}
     */
    replaceBlockElementWithNewLine(htmlString) {
      let splitText = htmlString.split(/<div.*?>|<\/div>|<comment.*?>|\n<\/comment>|<\/comment>|<h1>|<\/h1>|<h2>|<\/h2>|<h3>|<\/h3>|<h4>|<\/h4>|<h5>|<\/h5>|<h6>|<\/h6>|<p>|<\/p>|<li>|<\/li>|<blockquote>|<\/blockquote>/);
      splitText = splitText.map((text) => str_default.stripHTML(text));
      let joinedText = "";
      while (splitText.length) {
        if (splitText[splitText.length - 1].trim().length > 0 || splitText[splitText.length - 1].match(/\n/)) {
          break;
        }
        splitText.pop();
      }
      splitText.forEach((text, index) => {
        if (text.trim().length === 0 && !text.match(/\n/)) {
          return;
        }
        if (text.match(/[\n|>][>]?[\s]?$/) || index === splitText.length - 1) {
          joinedText += text;
        } else {
          joinedText += `${text}
`;
        }
      });
      return joinedText;
    },
    /**
     * Replaces HTML with markdown
     *
     * @param {String} htmlString
     *
     * @returns {String}
     */
    htmlToMarkdown(htmlString) {
      let generatedMarkdown = htmlString;
      const body = /<(body)(?:"[^"]*"|'[^']*'|[^'"><])*>(?:\n|\r\n)?([\s\S]*?)(?:\n|\r\n)?<\/\1>(?![^<]*(<\/pre>|<\/code>))/im;
      const parseBodyTag = generatedMarkdown.match(body);
      if (parseBodyTag) {
        generatedMarkdown = parseBodyTag[2];
      }
      this.htmlToMarkdownRules.forEach((rule) => {
        if (rule.pre) {
          generatedMarkdown = rule.pre(generatedMarkdown);
        }
        generatedMarkdown = generatedMarkdown.replace(rule.regex, rule.replacement);
      });
      return str_default.htmlDecode(this.replaceBlockElementWithNewLine(generatedMarkdown));
    },
    /**
     * Convert HTML to text
     *
     * @param {String} htmlString
     * @returns {String}
     */
    htmlToText(htmlString) {
      let replacedText = htmlString;
      this.htmlToTextRules.forEach((rule) => {
        replacedText = replacedText.replace(rule.regex, rule.replacement);
      });
      replacedText = str_default.htmlDecode(replacedText);
      return replacedText;
    },
    /**
     * Modify text for Quotes replacing chevrons with html elements
     *
     * @param {RegExp} regex
     * @param {String} textToCheck
     * @param {Function} replacement
     *
     * @returns {String}
     */
    modifyTextForQuote(regex, textToCheck, replacement) {
      let replacedText = "";
      let textToFormat = "";
      const match = textToCheck.match(regex);
      if (match !== null) {
        let insideCodefence = false;
        const textSplitted = textToCheck.split("\n");
        for (let i = 0; i < textSplitted.length; i++) {
          if (!insideCodefence) {
            insideCodefence = str_default.contains(textSplitted[i], "<pre>");
          }
          if (str_default.startsWith(textSplitted[i], "&gt;") && !insideCodefence) {
            textToFormat += `${textSplitted[i]}
`;
          } else {
            if (textToFormat !== "") {
              replacedText += this.formatTextForQuote(regex, textToFormat, replacement);
              textToFormat = "";
            }
            if (i === textSplitted.length - 1) {
              replacedText += `${textSplitted[i]}`;
            } else {
              replacedText += `${textSplitted[i]}
`;
            }
            if (insideCodefence) {
              insideCodefence = !str_default.contains(textSplitted[i], "</pre>");
            }
          }
        }
        if (textToFormat !== "") {
          replacedText += this.formatTextForQuote(regex, textToFormat, replacement);
        }
      } else {
        replacedText = textToCheck;
      }
      return replacedText;
    },
    /**
     * Format the content of blockquote if the text matches the regex or else just return the original text
     *
     * @param {RegExp} regex
     * @param {String} textToCheck
     * @param {Function} replacement
     *
     * @returns {String}
     */
    formatTextForQuote(regex, textToCheck, replacement) {
      if (textToCheck.match(regex)) {
        let textToFormat = textToCheck.split("\n").map((row) => row.substr(4).trim()).join("\n");
        textToFormat = textToFormat.trim();
        return replacement(textToFormat);
      }
      return textToCheck;
    },
    /**
     * Check if the input text includes only the open or the close tag of an element.
     *
     * @param {String} textToCheck - Text to check
     *
     * @returns {Boolean}
     */
    containsNonPairTag(textToCheck) {
      const tagRegExp = /<([a-z][a-z0-9-]*)\b[^>]*>|<\/([a-z][a-z0-9-]*)\s*>/gi;
      const tagStack = [];
      let match = tagRegExp.exec(textToCheck);
      while (match) {
        const openingTag = match[1];
        const closingTag = match[2];
        if (openingTag && openingTag !== "br") {
          tagStack.push(openingTag);
        } else if (closingTag) {
          const expectedTag = tagStack.pop();
          if (closingTag !== expectedTag) {
            return true;
          }
        }
        match = tagRegExp.exec(textToCheck);
      }
      return tagStack.length !== 0;
    },
    /**
     * @param {String} comment
     * @returns {Array} or undefined if exception occurs when executing regex matching
     */
    extractLinksInMarkdownComment(comment) {
      try {
        const htmlString = this.replace(comment, { filterRules: ["link"] });
        const regex = new RegExp(`<a href="${MARKDOWN_URL_REGEX}" target="_blank" rel="noreferrer noopener">`, "gi");
        const matches = [...htmlString.matchAll(regex)];
        const links = index_default_default.map(matches, (match) => str_default.sanitizeURL(match[1]));
        return links;
      } catch (e) {
        console.warn("Error parsing url in ExpensiMark.extractLinksInMarkdownComment", { error: e });
        return void 0;
      }
    },
    /**
     * Compares two markdown comments and returns a list of the links removed in a new comment.
     *
     * @param {String} oldComment
     * @param {String} newComment
     * @returns {Array}
     */
    getRemovedMarkdownLinks(oldComment, newComment) {
      const linksInOld = this.extractLinksInMarkdownComment(oldComment);
      const linksInNew = this.extractLinksInMarkdownComment(newComment);
      return linksInOld === void 0 || linksInNew === void 0 ? [] : index_default_default.difference(linksInOld, linksInNew);
    },
    /**
     * Replace MD characters with their HTML entity equivalent
     * @param {String} text
     * @return {String}
     */
    escapeMarkdownEntities(text) {
      const pattern = /([*_{}[\]~])/g;
      const entities = {
        "*": "&ast;",
        _: "&lowbar;",
        "{": "&lbrace;",
        "}": "&rbrace;",
        "[": "&lbrack;",
        "]": "&rbrack;",
        "~": "&#126;"
      };
      return text.replace(pattern, (char) => entities[char] || char);
    }
  };
  ExpensiMark.initializer();

  // index.ts
  function parseMarkdownToHTML(markdown) {
    const parser = ExpensiMark;
    const html = parser.replace(markdown, {
      shouldKeepRawInput: true
    });
    return html;
  }
  function parseHTMLToTokens(html) {
    const tokens = [];
    let left = 0;
    while (true) {
      const open = html.indexOf("<", left);
      if (open === -1) {
        if (left < html.length) {
          tokens.push(["TEXT", html.substring(left)]);
        }
        break;
      }
      if (open !== left) {
        tokens.push(["TEXT", html.substring(left, open)]);
      }
      const close = html.indexOf(">", open);
      if (close === -1) {
        throw new Error('Invalid HTML: no matching ">"');
      }
      tokens.push(["HTML", html.substring(open, close + 1)]);
      left = close + 1;
    }
    return tokens;
  }
  function parseTokensToTree(tokens) {
    const stack = [{ tag: "<>", children: [] }];
    tokens.forEach(([type, payload]) => {
      if (type === "TEXT") {
        const text = index_default_default.unescape(payload);
        const top = stack[stack.length - 1];
        top.children.push(text);
      } else if (type === "HTML") {
        if (payload.startsWith("</")) {
          const child = stack.pop();
          const top = stack[stack.length - 1];
          top.children.push(child);
        } else {
          stack.push({ tag: payload, children: [] });
        }
      } else {
        throw new Error(`Unknown token type: ${type}`);
      }
    });
    if (stack.length !== 1) {
      throw new Error("Invalid HTML: unclosed tags");
    }
    return stack[0];
  }
  function parseTreeToTextAndRanges(tree) {
    let text = "";
    function processChildren(node) {
      if (typeof node === "string") {
        text += node;
      } else {
        node.children.forEach(dfs);
      }
    }
    function appendSyntax(syntax) {
      addChildrenWithStyle(syntax, "syntax");
    }
    function addChildrenWithStyle(node, type) {
      const start = text.length;
      processChildren(node);
      const end = text.length;
      ranges.push({ type, start, length: end - start });
    }
    const ranges = [];
    function dfs(node) {
      if (typeof node === "string") {
        text += node;
      } else {
        if (node.tag === "<>") {
          processChildren(node);
        } else if (node.tag === "<strong>") {
          appendSyntax("*");
          addChildrenWithStyle(node, "bold");
          appendSyntax("*");
        } else if (node.tag === "<em>") {
          appendSyntax("_");
          addChildrenWithStyle(node, "italic");
          appendSyntax("_");
        } else if (node.tag === "<del>") {
          appendSyntax("~");
          addChildrenWithStyle(node, "strikethrough");
          appendSyntax("~");
        } else if (node.tag === "<emoji>") {
          addChildrenWithStyle(node, "emoji");
        } else if (node.tag === "<code>") {
          appendSyntax("`");
          addChildrenWithStyle(node, "code");
          appendSyntax("`");
        } else if (node.tag === "<mention-here>") {
          addChildrenWithStyle(node, "mention-here");
        } else if (node.tag === "<mention-user>") {
          addChildrenWithStyle(node, "mention-user");
        } else if (node.tag === "<blockquote>") {
          appendSyntax(">");
          addChildrenWithStyle(node, "blockquote");
          if (ranges.length > 0) {
            const curr = ranges[ranges.length - 1];
            curr.start -= 1;
            curr.length += 1;
          }
        } else if (node.tag === "<h1>") {
          appendSyntax("# ");
          addChildrenWithStyle(node, "h1");
        } else if (node.tag.startsWith("<pre")) {
          const content = index_default_default.unescape(node.tag.match(/data-code-raw="([^"]*)"/)[1]);
          appendSyntax("```");
          addChildrenWithStyle(content, "pre");
          appendSyntax("```");
        } else if (node.tag.startsWith('<a href="')) {
          const rawHref = node.tag.match(/href="([^"]*)"/)[1];
          const href = index_default_default.unescape(rawHref);
          const isLabeledLink = node.tag.match(/link-variant="([^"]*)"/)[1] === "labeled";
          const dataRawHref = node.tag.match(/data-raw-href="([^"]*)"/);
          const matchString = dataRawHref ? index_default_default.unescape(dataRawHref[1]) : href;
          if (!isLabeledLink && node.children.length === 1 && typeof node.children[0] === "string" && (node.children[0] === matchString || `mailto:${node.children[0]}` === href)) {
            addChildrenWithStyle(node.children[0], "link");
          } else {
            appendSyntax("[");
            processChildren(node);
            appendSyntax("](");
            addChildrenWithStyle(matchString, "link");
            appendSyntax(")");
          }
        } else {
          throw new Error(`Unknown tag: ${node.tag}`);
        }
      }
    }
    dfs(tree);
    return [text, ranges];
  }
  function getTagPriority(tag) {
    switch (tag) {
      case "blockquote":
        return 2;
      case "h1":
        return 1;
      default:
        return 0;
    }
  }
  function sortRanges(ranges) {
    return ranges.sort((a, b) => a.start - b.start || b.length - a.length || getTagPriority(b.type) - getTagPriority(a.type) || 0);
  }
  function groupRanges(ranges) {
    const lastVisibleRangeIndex = {};
    return ranges.reduce((acc, range2) => {
      const start = range2.start;
      const end = range2.start + range2.length;
      const rangeWithSameStyleIndex = lastVisibleRangeIndex[range2.type];
      const sameStyleRange = rangeWithSameStyleIndex !== void 0 ? acc[rangeWithSameStyleIndex] : void 0;
      if (sameStyleRange && sameStyleRange.start <= start && sameStyleRange.start + sameStyleRange.length >= end && range2.length > 1) {
        sameStyleRange.depth = (sameStyleRange.depth || 1) + 1;
      } else {
        lastVisibleRangeIndex[range2.type] = acc.length;
        acc.push(range2);
      }
      return acc;
    }, []);
  }
  function parseExpensiMarkToRanges(markdown) {
    console.log("[wildebug] markdown", markdown);
    const html = parseMarkdownToHTML(markdown);
    console.log("[wildebug] html", html);
    const tokens = parseHTMLToTokens(html);
    console.log("[wildebug] tokens", tokens);
    const tree = parseTokensToTree(tokens);
    console.log("[wildebug] tree", tree);
    const [text, ranges] = parseTreeToTextAndRanges(tree);
    console.log("[wildebug] text", text);
    console.log("[wildebug] ranges", ranges);
    if (text !== markdown) {
      return [];
    }
    const sortedRanges = sortRanges(ranges);
    console.log("[wildebug] sortedRanges", sortedRanges);
    const groupedRanges = groupRanges(sortedRanges);
    console.log("[wildebug] groupedRanges", groupedRanges);
    return groupedRanges;
  }
  globalThis.parseExpensiMarkToRanges = parseExpensiMarkToRanges;
})();
