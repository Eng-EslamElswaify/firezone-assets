;(function(window) {
  const defaultLang = 'ar';
  const supportedLangs = {
    ar: 'العربية',
    en: 'English',
    fr: 'Français',
    es: 'Español'
  };

  const translations = {
    ar: {
      "fireZone": "فاير زون",
      "gameplayLink": "طريقة اللعب",
      "backToLogin": "العودة للصفحة الرئيسية",
      "contactLink": "اتصل بنا",
      "privacyLink": "سياسة الخصوصية",
      "termsLink": "الشروط والأحكام",
      "allRightsReserved": "© جميع الحقوق محفوظة",
      "logoutBtn": "تسجيل الخروج",
      "loading": "جاري التحميل...",
      "noPosts": "لا توجد منشورات"
    },
    en: {
      "fireZone": "FireZone",
      "gameplayLink": "Gameplay",
      "backToLogin": "Back to Home",
      "contactLink": "Contact",
      "privacyLink": "Privacy Policy",
      "termsLink": "Terms of Use",
      "allRightsReserved": "© All rights reserved",
      "logoutBtn": "Log out",
      "loading": "Loading...",
      "noPosts": "No posts available"
    },
    fr: {},
    es: {}
  };

  // نسخ الإنجليزية للغات الفارغة
  ['fr','es'].forEach(lang=>{
    for(const key in translations.en){
      if(!translations[lang][key]){
        translations[lang][key]=translations.en[key];
      }
    }
  });

  function setLanguage(lang){
    if(supportedLangs[lang]){
      localStorage.setItem('siteLanguage',lang);
      location.reload();
    }
  }
  function getLanguage(){
    return localStorage.getItem('siteLanguage')||defaultLang;
  }
  function _(id){return document.getElementById(id);}
  function translateElement(id,key,prop='innerText'){
    const el=_(id); if(!el) return;
    const lang=getLanguage(); const t=translations[lang];
    if(t && t[key]!==undefined){
      if(prop==='innerHTML') el.innerHTML=t[key];
      else if(prop==='placeholder') el.placeholder=t[key];
      else el[prop]=t[key];
    }
  }
  function getTranslation(key){
    const lang=getLanguage();
    return (translations[lang]&&translations[lang][key])||key;
  }

  function applyAllTranslations(){
    const lang=getLanguage();
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';

    translateElement('logoTitle','fireZone');
    translateElement('gameplayLinkNav','gameplayLink');
    translateElement('backToHomeNav','backToLogin');
    translateElement('contactLinkFooter','contactLink');
    translateElement('privacyLinkFooter','privacyLink');
    translateElement('termsLinkFooter','termsLink');
    translateElement('copyright','allRightsReserved','innerHTML');
    translateElement('logoutBtn','logoutBtn');
  }

  function createLanguageSwitcher(){
    const selector=_('languageSelector');
    if(selector){
      selector.innerHTML='';
      for(const code in supportedLangs){
        const opt=document.createElement('option');
        opt.value=code;
        opt.textContent=supportedLangs[code];
        selector.appendChild(opt);
      }
      selector.value=getLanguage();
      selector.addEventListener('change',e=>setLanguage(e.target.value));
    }
  }

  document.addEventListener('DOMContentLoaded',()=>{
    createLanguageSwitcher();
    applyAllTranslations();
  });

  window.lang={set:setLanguage,get:getLanguage,t:getTranslation,apply:applyAllTranslations};
})(window);