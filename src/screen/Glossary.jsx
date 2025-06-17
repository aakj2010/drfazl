import React, { useContext } from 'react'
import './glossary.css'
import FontContext from '../context/FontContext';
import LanguageContext from '../context/LanguageContext';

function Glossary() {
  const context = useContext(FontContext);
  const languageContext = useContext(LanguageContext);
  const getFontFamily = () => {
    return languageContext.language === "Tamil" ? "system-ui" : "Nunito, sans-serif"
  };
  return (
    <>
      {
        languageContext.language === 'English' ?
          <div className='glossary-wrapper max-w-2xl mx-auto w-full'>
            <div className='g-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize + 1}px` }}>
              Glossary
            </div>
            <div className='explanation'>
              <div className='e-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize + 1}px` }}>Alif Laam Meem (Quran Explanation)</div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>On the home screen, you can browse your available textbooks and select one to
                start reading. You can also easily search for specific topics, keywords, or pages, as well as access
                your bookmarked pages and notes.
              </div>
            </div>
            <div className='g-title2'><p>Alif Laam Leem</p> </div>
            <div className='g-items' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
              <div className='g-items-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}><p>Alif-Allah</p></div>
              <div className='g-items-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}><p>On the home screen, you can browse your available textbooks and select one
                to start reading. </p></div>
            </div>
            <div className='g-items'>
              <div className='g-items-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}><p>Laam - Almighty</p></div>
              <div className='g-items-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}><p>On the home screen, you can browse your available textbooks and select one
                to start reading. </p></div>
            </div>
            <div className='g-items'>
              <div className='g-items-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}><p>Alif-Allah</p></div>
              <div className='g-items-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}><p>On the home screen, you can browse your available textbooks and select one
                to start reading. </p></div>
            </div>
            <div className='empty'></div>
          </div> :
          <div className='glossary-wrapper max-w-2xl mx-auto w-full'>
            <div className='g-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize + 1}px` }}>
              பிற்சேர்க்கை
            </div>
            <div className='explanation'>
              <div className='e-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize + 1}px` }}>
                அலிஃப் லாம் மீம் (குர்ஆன் விளக்கம்)
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                அலிஃப், லாம், மீம்;  அலிஃப், லாம், ரா;  ஹா, மீம், தா;  ஸீம்;  யாஸீன்;  தா, ஹா;  ஐன்,
                ஸீன், காஃப், நூன், ஸாத் போன்ற குர்ஆனின் பல அத்தியாயங்களில் வரக்கூடிய எழுத்துக்கள்
                அனைத்தும் அல்லாஹ்வைப் பற்றி அறிவிக்கக்கூடிய அடையாள எழுத்துக்கள் ஆகும்.
                அல்லாஹ்வின் பண்புகள் அடங்கிய எழுத்துக்களும் ஆகும். இந்த அடிப்படையைக் கொண்டு
                ஒவ்வொரு அடையாள எழுத்தையும் நாம் தனித்தனியாக பிரித்தறிய இருக்கின்றோம்.
                இதுவே அல்லாஹ்வை தியானித்த நிலையில் குர்ஆனை ஓதுவதற்கு அடிப்படையாக அமையும்.
              </div>
            </div>
            <div className='explanation'>
              <div className='e-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize + 1}px` }}>
                அலிஃப், லாம், மீம்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                அலிஃப் – அல்லாஹ்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                வானங்களிலிருந்தும் பூமி வரையில் உள்ள காரியங்களை மனிதர்களுக்காக நிர்வகிக்கும்
                பொறுப்பேற்றுக் கொண்டவன்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                லாம் - லத்தீஃ - நுட்பமான அறிவுடையவன் -
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                லா இலாஹ இல்லல்லாஹ்
                நுட்பமானவன்; இறைவன் அல்லாஹ்வே. அவனைத் தவிர இறைவன் இல்லை.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                மீம் – முத்தகீன்கள்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                இறைவனுக்கு அஞ்சுவோர்கள், உள்ளச்சம் உடையவர்களுக்கு வானங்களிலிருந்தும் பூமி வரையில் உள்ள தேவைகளை அவனே சீர்படுத்துகிறான்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ஸாத் – சித்திக்கின்கள்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                இறைவனுக்கு உண்மையாளர்கள். சத்தியத்தை நிலைநாட்டுவோரே தங்கள் பயபக்தியில்
                நிலைத்திருப்பவர்கள். இவர்கள் இறைவன் ஒருவனைத் தவிர வேறு எதனையும்,
                எவரையும் இறைவனாக ஆக்கிக் கொள்ளமாட்டார்கள். இத்தகையோரே அல்லாஹ்வுக்கு
                நெருக்கமானவர்கள்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ரா - ரூஃயா – காணுதல்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ரா என்பதன் பொருள் - மறைவானவற்றின் மீது நீங்கள் நம்பிக்கை கொண்டவர்களாக
                உங்கள் மனதில் நீங்கள் காணும் உங்கள் விருப்பங்கள் ஒவ்வொன்றும் அல்லாஹ் (அலிஃப்)
                ஒருவனையே நீங்கள் முன்னோக்கி அவனைத் தவிர இறைவன் இல்லை (லாம்) என்பதை
                உறுதியாக நம்பிக்கை கொள்வீர்களானால், நிச்சயமாக காண்பதே (ரா) ரூஃயா நனவாகும்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                யூஸூஃப் நபி அவர்களின் சரித்திரத்தில் கனவுகள் காண்பதை அவரவர் நனவுகளின் முன்னறிவிப்பாகக் காணலாம்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                எனவே, நல்லறிவுடையோரே, கனவுகள் காண்பதும் கற்பனைகளில் நீங்கள் காண்பதும்
                மறைவான உண்மை. நீங்கள் நம்பிக்கை கொள்ளுங்கள். உங்களுக்காக அந்த நனவுகளுக்காக -
                வானங்களிலிருந்து பூமி வரையில் உள்ள காரியங்களை உங்கள் இறைவன் உங்களுக்காக
                ஒழுங்குபடுத்துவான்; இன்னும் மேன்மையாக்குவான்.
              </div>
            </div>
            <div className='explanation'>
              <div className='e-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize + 1}px` }}>
                காஃப், ஹா, யா, ஐன், ஸாத்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                காஃப் – கஹ்ஹார்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                அடக்கியாள்பவன்; காதிர் - பேராற்றலுடையவன் என்பது முதல் எழுத்தாகும்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ஹா – ஹக்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                சத்தியமான உண்மை என்பதன் பொருளாகும்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                யா - யா என்பது ‘யஃகீன்’ - பேரறிவாளன்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ஐன் – இல்ம்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                இறைவனிடமிருந்துள்ள உண்மையான ஞானம் என்பதன் பொருளாகும்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ஸாத் – சித்தீகின்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                உண்மையாளர் என்பதை உணர்த்துகிறது.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                இனி இதன் ஒட்டுமொத்தமான பொருள் யாதெனில், ஓ மனிதனே, இறைவனே பேரறிவாளன்
                (யா); இது உங்கள் யாவரையும் அடக்கியாளும் (காஃப் - கஹ்ஹார்); யாவற்றின் மீதும்
                பேராற்றல் கொண்ட (காஃப் - காதிர்); உங்கள் இறைவனிடமிருந்துள்ள சத்தியம் - உண்மை
                (ஹா - ஹக்). நீங்கள் உங்கள் இறைவனுக்கு உண்மையாளர்களாக (ஸாத் - சித்தீகின்களாக)
                இருப்பீர்களானால், வானங்களையும், பூமியையும் இவற்றிற்கிடைப்பட்ட ஒவ்வொரு
                பொருள்களையும் தன் புறமிருந்துள்ள மேலான ஞானங்களை (ஐன் - இல்ம்)க் கொண்டு
                பதவிகளால் உங்களை உயர்த்தி, அவற்றின் மீது உங்கள் ஆட்சியை, கட்டளையை நிலைபெறச்
                செய்வான். தன்னுடைய பிரதிநிதியாகவும் உங்களை ஆக்குவான்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                45:13 அவனே வானங்களில் உள்ளவை, பூமியில் உள்ளவை அனைத்தையும் தன் அருளால்
                வசப்படுத்திக் கொடுத்திருக்கிறான். இதில் சிந்திக்கும் சமூகத்தாருக்கு நிச்சயமாக பல
                அத்தாட்சிகள் இருக்கிறது.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                45:3 நம்பிக்கையாளர்களுக்கு நிச்சயமாக வானங்களிலும், பூமியிலும் அத்தாட்சிகள் இருக்கின்றன.
              </div>
              <div className='e-para'>
                எனவே மனிதர்களே, காஃப், ஹா, யா, ஐன், ஸாத் என்பதை என்றென்றும் நினைவில்
                கொள்ளுங்கள். வானங்களுக்கும், பூமிக்கும் வாரிசாக ஆகுங்கள்.
              </div>
            </div>
            <div className='explanation'>
              <div className='e-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize + 1}px` }}>
                தாஹா
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                தா - தாஹிர் - தூய்மையாளன் என்பது பொருளாகும்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                இறைவன் அனுமதியைக் கொண்டல்லாமல் நம்மில் எவரும் பரிசுத்தம் அடைய முடியாது.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                4:49 தங்களைத் தாங்களே பரிசுத்தமானவர்கள் என்பவர்களை நீர் பார்க்கவில்லையா?
                அவ்வாறு அல்ல; அல்லாஹ் தான் நாடியவர்களை பரிசுத்தமாக்குவான். எவரும் அணுவளவும்
                அநியாயம் செய்யப்பட மாட்டார்கள்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ஹா - ஹக்கீம் - ஞானமிக்கோன் என்பது பொருளாகும்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                மனிதர்களில் எவர் தன் பெருமையைக் கைவிட்டு, பயபக்தியாளராக இறைவனுக்கே எல்லா
                புகழும் என்று தங்களைத் தூய்மைப்படுத்திக் கொள்ளும் முயற்சியில் இருக்கிறார்களோ,
                அவர்களே அகிலங்களின் ஞானம் கிடைக்கப் பெற்றவர்கள். இவர்களே மேலான ஞானம்
                உடையவனிடமிருந்து அவன் அனுமதியைக் கொண்டு பதவிகளால் மேலோங்குபவர்கள்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                தா - தாஹிர் - தூய்மையானவர்களாக
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ஸீன் - சுபஹான் - பரிசுத்தமானவர்களாக
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                மீம் - முத்தகீன் - இறைவனுக்கு அஞ்சியவர்களாக
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                இந்த மூன்று குணங்களைக் கொண்டு இறைவனிடமிருந்து இன்னும் மேலான பண்புகளை அடைந்து
                பதவிகளால் உயர்வை அடைவதற்குரிய வழியாகும். இதுவே நேர்வழி. நிச்சயமாக
                பயபக்தியாளராகவும் தூய்மையையும், பரிசுத்தத்தையும் பேணுவது நம்மை இறைவனுடைய
                அண்மையில் ஆக்கும்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                54:54 நிச்சயமாக பயபக்தியுடையவர்கள் சுவர்க்கச் சோலைகளில் ஆறுகளில் இருப்பார்கள்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                54:55 உண்மையான இருக்கையில் சர்வ வல்லமையுடைய அரசனின் அண்மையில் இருப்பார்கள்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                தா, ஸீன், மீம் இவை குர்ஆனாகிய இவ்வேதத்தின் மிகத் தெளிவான அத்தாட்சிகளாகும்.
                பயபக்தியாளர்களுக்கே (முத்தகீன்களுக்கே) இறைவனுடைய அத்தாட்சிகள் யாவும் உரித்தாகும்.
              </div>
            </div>
            <div className='explanation'>
              <div className='e-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize + 1}px` }}>
                யா ஸீன்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                யா - பேரறிவாளன்;
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ஸீன் - ஸூப்ஹான் - தூய்மையாளன்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ஸாத் - ஸபர் - பொறுமை என்பதன் பொருளாகும்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                பொறுமையைக் கொண்டே இறைவனிடம் உதவி தேடுங்கள். நிச்சயமாக பொறுமையாளர்களே
                இறுதி வெற்றியாளர்கள். ஏனெனில், பொறுமையாளருடன் இறைவன் இருக்கிறான்.
              </div>
            </div>
            <div className='explanation'>
              <div className='e-title' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize + 1}px` }}>
                ஹா மீம்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                ஹா - ஹக்கீம் - மேன்மையான ஞானம் உடையவன்; மீம் - முஃமின் - நம்பிக்கைக்குரியவன்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                மேன்மையான ஞானங்களுக்காக நம்பிக்கைக்குரியவனிடமே திரும்புங்கள்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                காஃப் - குர்ஆன்
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                நன்மை - தீமைகளின் ஞானங்களை தெளிவாக பிரித்தறிவிக்கும் கண்ணியமிக்க இவ்வேதத்தின்
                முதல் எழுத்தாகும்.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                50:1 காஃப் - எக்காலத்தும் பொருந்தக்கூடிய கண்ணியமிக்க குர்ஆன் மீது சத்தியமாக.
              </div>
              <div className='e-para' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                நூன் - நூர் - ஒளிமிக்கது என்பதன் பொருளாகும். இது பிரகாசமும், நேர்வழியும் கொண்ட 
                ஞானமிக்க நூல் ஆகும்.

              </div>
            </div>
            <div className='empty'></div>
          </div>
      }
    </>
  )
}

export default Glossary