
"ui";

ui.layout(
    <vertical h="auto">
        <appbar>
            <toolbar id="toolbar" title="XApp Framework" />
        </appbar>
        <text textSize="16sp">
        </text>
        <text gravity="center" textStyle="bold" textColor="black" size="20">You did not configure the default startup js file, so you were redirected to this interface.  Please click the set js file button or the run js file button below to set (set js file will permanently set the js file, and the js file you entered will be launched the next time you start it, and run js file will not automatically start you next time.  Entered js, if you have used set js file and need to reset it, please enter settings--application--xapp framework to delete application data or delete /sdcard/xingyujie/xapp (it will not delete your js file) to reset  setting), or you can open the /sdcard/xingyujie/xapp/jsfile.conf file with a text editor to edit the file.  Author: xingyujie (https://github.com/xingyujie), telegram: +16167997429, Twitter: @xyj_nullptr, Discord: xingyujie</text>
        <linear gravity="center">
            
            <button text="Set JS File" style="Widget.AppCompat.Button.Colored" gravity="center" id="setjs" w="auto"/>
            <button text="Run JS File(test only)" gravity="center" id="testjs" w="auto"/>
            
            
            
            
            
            
        </linear>
    </vertical>
);


ui.testjs.on("click", () => {
    threads.start(function() {
        var testjsfile = rawInput("TestRun: Type JS File Path");
        engines.execScriptFile(testjsfile);

    });

});
ui.setjs.on("click", () => {
    threads.start(function() {
        var setjsfile = rawInput("Set JS File Path: Type JS File Path");
        var jsfileconf = "/sdcard/xingyujie/xapp/jsfile.conf";
        files.write(jsfileconf, setjsfile);
        alert("Set successful!")
    });

});
