TAPi18n._afterUILanguageChange = function() {
    console.log("TAPi18n._afterUILanguageChange");
    I18NConf.setLanguage(TAPi18n.getLanguage());
};

I18NConf.configure({
    languages: ["cs", "en"],
    defaultLanguage: 'cs',
    autoConfLanguage: true
});

Router.configure({
    layoutTemplate: 'appBody',
    loadingTemplate: 'appLoading',
    notFoundTemplate: 'appNotFound'
});

Router.route('home', {
    path: '/'
});

Router.route('digitalni-knihovna', {
    template: 'menuPageTemplate',
    yieldRegions: {digitalniKnihovna: {to: 'pageContent'}}
});


/* NAPOVEDA */
Router.route('napoveda', {
    template: 'pageTemplate',
    yieldRegions: {'uvod.cs': {to: 'pageContent'}},
    i18n: {
        languages: {
            en: {
                yieldRegions: {'uvod.en': {to: 'pageContent'}}
            }
        }
    }
});

Router.route('linux', {
    template: 'helpPageTemplate',
    yieldRegions: {'linux.cs': {to: 'pageContent'}},
    i18n: {
        languages: {
            en: {
                yieldRegions: {'linux.en': {to: 'pageContent'}}
            }
        }
    }
});

Router.route('aplikace', {
    template: 'helpPageTemplate',
    yieldRegions: {'aplikace.cs': {to: 'pageContent'}},
    i18n: {
        languages: {
            en: {
                yieldRegions: {'aplikace.en': {to: 'pageContent'}}
            }
        }
    }
});

Router.route('sluchatka', {
    template: 'helpPageTemplate',
    yieldRegions: {'sluchatka.cs': {to: 'pageContent'}},
    i18n: {
        languages: {
            en: {
                yieldRegions: {'sluchatka.en': {to: 'pageContent'}}
            }
        }
    }
});

Router.route('ukladani-dat', {
    template: 'helpPageTemplate',
    yieldRegions: {'ukladaniDat.cs': {to: 'pageContent'}},
    i18n: {
        languages: {
            en: {
                yieldRegions: {'ukladaniDat.en': {to: 'pageContent'}}
            }
        }
    }
});

Router.route('tisk', {
    template: 'helpPageTemplate',
    yieldRegions: {tisk: {to: 'pageContent'}}
});

Router.route('o-digitalni-knihovne', {
    template: 'helpPageTemplate',
    yieldRegions: {'oDigitalniKnihovne.cs': {to: 'pageContent'}},
    i18n: {
        languages: {
            en: {
                yieldRegions: {'oDigitalniKnihovne.en': {to: 'pageContent'}}
            }
        }
    }
});

Router.route('jak-hledat', {
    template: 'helpPageTemplate',
    yieldRegions: {'jakHledat.cs': {to: 'pageContent'}},
    i18n: {
        languages: {
            en: {
                yieldRegions: {'jakHledat.en': {to: 'pageContent'}}
            }
        }
    }
});

Router.route('jak-tisknout', {
    template: 'helpPageTemplate',
    yieldRegions: {'jakTisknout.cs': {to: 'pageContent'}},
    i18n: {
        languages: {
            en: {
                yieldRegions: {'jakTisknout.en': {to: 'pageContent'}}
            }
        }
    }
});