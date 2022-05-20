files.create("/sdcard/xingyujie/xapp/jsfile.conf");
shell("mkdir -p /sdcard/xingyujie/xapp");
shell("touch /sdcard/xingyujie/xapp/jsfile.conf");
var jsfileconf = "/sdcard/xingyujie/xapp/jsfile.conf";
var file = open(jsfileconf)
var get_jsfileconf = file.read();
var empty = "";
var defaultpath = "./welcome.js";
if(get_jsfileconf == empty){
files.write(jsfileconf, defaultpath);
};
var jsfileconf = "/sdcard/xingyujie/xapp/jsfile.conf";
var file = open(jsfileconf)
var get_jsfileconf = file.read();

engines.execScriptFile(get_jsfileconf);

file.close();

