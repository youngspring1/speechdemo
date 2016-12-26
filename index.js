
var bingClientTTS = new BingTTS.Client("46adbdd87c3e442d92bb33e7f5b5d317");
document.getElementById("speakBtn").addEventListener("click", function () {
    bingClientTTS.multipleXHR = document.getElementById("multipleXHRChk").checked;
    bingClientTTS.synthesize("おはようございます", BingTTS.SupportedLocales.jpJP_Female);
    bingClientTTS.synthesize("天気がいいから、散歩しましょう。", BingTTS.SupportedLocales.jpJP_Female);
//    bingClientTTS.synthesize("Salut, je m'appelle David", BingTTS.SupportedLocales.frFR_Female);
//    bingClientTTS.synthesize("Enchanté de faire votre connaissance!", BingTTS.SupportedLocales.frFR_Male);
//    bingClientTTS.synthesize("Hallo, mein Name ist Frank.", BingTTS.SupportedLocales.deDE_Male);
//    bingClientTTS.synthesize("Wie geht es Ihnen?", BingTTS.SupportedLocales.deDE_Female);
//    bingClientTTS.synthesize("Zdravstvuite, menya zovut Kristina i ya rada vas privetstvovat'", BingTTS.SupportedLocales.ruRU_Female, () => {
//    bingClientTTS.synthesize("Even more later text to speech!", BingTTS.SupportedLocales.enGB_Female);
//    });
});