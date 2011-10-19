(function(){function o(){this.hasArgument=function(a){return a&&a.length>0};this.hasTooManyArguments=function(a){return a&&a.length>a.callee.length};this.nullUndefinedArgument=function(a){return this.isNull(a)||this.isUndefined(a)};this.isUndefined=function(a){return a==null&&a!==null};this.isNull=function(a){return a===null};this.isNumber=function(a){return typeof a=="number"};this.isPositiveNumber=function(a){return this.isNumber(a)&&a>=0};this.isNumberInRange=function(a,b,c){return this.isNumber(a)&&a>=b&&a<=c};this.isString=function(a){return typeof a=="string"};this.isNonEmptyString=function(a){return this.isString(a)&&a.length>0};this.isFunction=function(a){return typeof a=="function"};this.isBoolean=function(a){return typeof a=="boolean"};this.isObject=function(a){return typeof a=="object"};this.isArray=function(a){return this.isObject(a)&&a instanceof Array};this.isStringArray=function(a){var b=false;var c=this;if(this.isArray(a)){b=function(a){for(var b=0;b<a.length;b++){if(!c.isString(a[b])){return false}}return true}(a)}return b};this.argumentsLength=function(a){return a.length}}function m(a){var b=new Array;while(a.isValidRow()){fieldCount=a.fieldCount();var c=new Object;for(var d=0;d<fieldCount;d++){var e=a.fieldName(d);c[e]=a.field(d)}b.push(c);a.next()}return new k(b)}function l(a,b){a=a||0;b=b||q["db_error_unknown"];this.__defineGetter__("code",function(){return a});this.__defineGetter__("message",function(){return b});this.toString=function(){return"[object SQLError]"}}function k(a){this.__defineGetter__("length",function(){return a.length});this.item=function(b){if(b<0||b>=this.length){return null}return a[b]};this.toString=function(){return"[object SQLResultSetRowList]"}}function j(a,b,c){this.__defineGetter__("insertId",function(){return a});this.__defineGetter__("rowsAffected",function(){return b});this.__defineGetter__("rows",function(){return c});this.toString=function(){return"[object SQLResultSet]"}}function i(a,b){var c=b;var d;this.executeSql=function(b,e,f,g){if(!p.hasArgument(arguments)){throw q["syntax_err"]}try{if(c){b=b.replace(/^\s+|\s+$/g,"");if(b.search(/^select/i)!=0){throw new l(1,q["not_authorized"])}}var h;try{h=a.execute(b,e)}catch(i){if(i.toString().search(/constraint failed/)!=-1){throw new l(6,q["constraint_failed"])}else{throw new l}}if(p.isFunction(f)){f(this,new j(a.lastInsertRowId,a.rowsAffected,m(h)))}if(h){h.close();h=null}}catch(i){d=i instanceof l?i:new l;if(p.isFunction(g)){g(this,d)}}};this.getLastError=function(){return d};this.toString=function(){return"[object SQLTransaction]"}}function h(a){function d(a,c,d,e){try{b.execute("begin",null);var f=new i(b,e);a(f);var g=f.getLastError();if(g){throw g}}catch(h){if(c){c(h instanceof l?h:new l)}return}finally{b.execute("commit",null)}if(d){d()}}var b=google.gears.factory.create("beta.database");try{b.open(a)}catch(c){throw q["TMP_ERROR"]}this.transaction=function(a,b,c){if(!p.hasArgument(arguments)){throw q["invalid_state_err"]}else if(!p.isFunction(a)||b&&!p.isFunction(b)||c&&!p.isFunction(c)){throw q["type_mismatch_err"]}setTimeout(function(){d(a,b,c)},50)};this.readTransaction=function(a,b,c){if(!p.hasArgument(arguments)){throw q["type_mismatch_err"]}else if(!p.isFunction(a)||b&&!p.isFunction(b)||c&&!p.isFunction(c)){throw q["type_mismatch_err"]}setTimeout(function(){d(a,b,c,true)},50)};this.__defineGetter__("version",function(){return"0.0"});this.changeVersion=function(){};this.toString=function(){return"[object Database]"}}function f(){function e(a){a=a||{};this.__defineGetter__("enableHighAccuracy",function(){return a.enableHighAccuracy||false});this.__defineSetter__("enableHighAccuracy",function(b){if(!p.isUndefined(b)&&!p.isBoolean(b)){throw q["TMP_ERROR"]}a.enableHighAccuracy=b});this.__defineGetter__("timeout",function(){return a.timeout});this.__defineSetter__("timeout",function(b){if(!p.isUndefined(b)&&!p.isNumberInRange(b,0,Infinity)){throw q["TMP_ERROR"]}a.timeout=b});this.__defineGetter__("maximumAge",function(){return a.maximumAge||0});this.__defineSetter__("maximumAge",function(b){if(!p.isUndefined(b)&&!p.isNumberInRange(b,0,Infinity)){throw q["TMP_ERROR"]}a.maximumAge=b})}function d(a,b){this.__defineGetter__("coords",function(){return a});this.__defineGetter__("timestamp",function(){return b})}function c(a){var b=null;if(p.isFunction(a)){b=function(b){a(g(b))}}return b}function b(a){var b;if(p.isFunction(a)){b=function(b){a(new d(f(b.coords),b.timestamp))}}return b}var a=google.gears.factory.create("beta.geolocation");this.getCurrentPosition=function(d,f,g){try{a.getCurrentPosition(b(d),c(f),new e(g))}catch(h){throw q["geo_watch_getCurrent"]}};this.watchPosition=function(d,f,g){try{return a.watchPosition(b(d),c(f),new e(g))}catch(h){throw q["geo_watch_getCurrent"]}};this.clearWatch=function(b){if(p.isUndefined(b)){throw q["geo_clearWatch"]}if(p.isPositiveNumber(b)){a.clearWatch(b)}};var f=function(a){var b=function(a,b,c,d,e){this.__defineGetter__("latitude",function(){return a});this.__defineGetter__("longitude",function(){return b});this.__defineGetter__("altitude",function(){return p.isPositiveNumber(c)?c:null});this.__defineGetter__("accuracy",function(){return p.isPositiveNumber(d)?d:Number.MAX_VALUE});this.__defineGetter__("altitudeAccuracy",function(){return p.isPositiveNumber(e)?e:null});this.__defineGetter__("heading",function(){return null});this.__defineGetter__("speed",function(){return null})};if(p.nullUndefinedArgument(a.latitude)){throw q["geo_coordinates_nullUndefinedLatitude"]}if(p.nullUndefinedArgument(a.longitude)){throw q["geo_coordinates_nullUndefinedLongitude"]}return new b(a.latitude,a.longitude,a.altitude,a.accuracy,a.altitudeAccuracy)};var g=function(a){var b=function(a,b){this.__defineGetter__("code",function(){return a});this.__defineGetter__("message",function(){return b})};b.prototype.__defineGetter__("PERMISSION_DENIED",function(){return 1});b.prototype.__defineGetter__("POSITION_UNAVAILABLE",function(){return 2});b.prototype.__defineGetter__("TIMEOUT",function(){return 3});switch(a.code){case a.PERMISSION_DENIED:return new b(b.prototype.PERMISSION_DENIED,a.message);case a.TIMEOUT:return new b(b.prototype.TIMEOUT,a.message);default:return new b(b.prototype.POSITION_UNAVAILABLE,a.message)}}}function e(a){var b=a[0];if(p.isFunction(b)&&p.argumentsLength(a)>2){var c=new Array;for(var d=0;d<p.argumentsLength(a)-2;d++){c[d]=a[d+2]}b=b.apply(this,c)}return b}function d(a){if(!isFinite(a)||!p.isPositiveNumber(a)){a=0}return a}function c(a){return p.isString(a)||p.isFunction(a)}function b(){navigator.geolocation=new f}if(!window.google||!google.gears){return}b();var a=google.gears.factory.create("beta.timer");window.setTimeout=function(){if(!c(arguments[0])){return a.setTimeout("",0)}var b=e(arguments);var f=d(arguments[1]);return a.setTimeout(b,f)};window.setInterval=function(){const b=10;if(!c(arguments[0])){return a.setInterval("",0)}var f=e(arguments);var g=d(arguments[1]);g=Math.max(g,b);return a.setInterval(f,g)};window.clearTimeout=function(){if(p.isPositiveNumber(arguments[0])){a.clearTimeout(arguments[0])}};window.clearInterval=function(){if(p.isPositiveNumber(arguments[0])){return a.clearInterval(arguments[0])}};var g=XMLHttpRequest;XMLHttpRequest=function(){var a=this;var b=new g;var c=false;this.__defineGetter__("UNSENT",function(){return 0});this.__defineGetter__("OPENED",function(){return 1});this.__defineGetter__("HEADERS_RECEIVED",function(){return 2});this.__defineGetter__("LOADING",function(){return 3});this.__defineGetter__("DONE",function(){return 4});this.__defineGetter__("readyState",function(){return b.readyState});this.__defineGetter__("status",function(){var a=0;try{a=b.status}catch(c){}return a});this.__defineGetter__("statusText",function(){var a="";try{a=b.statusText}catch(c){}return a});this.__defineGetter__("responseText",function(){var a="";try{a=b.responseText}catch(c){}return a});this.__defineGetter__("responseXML",function(){if(!(this.readyState==this.DONE)){return null}var a=new DOMParser;var b=null;try{b=a.parseFromString(this.responseText,"text/xml")}catch(c){}return b});this.open=function(a,c,d,e,f){if(!p.hasArgument(arguments)||arguments.length==1){throw q["not_enough_args"]}try{switch(arguments.length){case 2:b.open(a,c,true);break;case 3:b.open(a,c,d);break;case 4:b.open(a,c,d,e);break;default:b.open(a,c,d,e,f)}}catch(g){}};this.send=function(a){if(p.hasTooManyArguments(arguments)){throw q["invalid_state_err"]}if(a&&!p.isString(a)){throw q["TMP_ERROR"]}try{b.send(a)}catch(c){throw q["invalid_state_err"]}};this.abort=function(){try{b.abort()}catch(a){}};this.getResponseHeader=function(a){if(!p.isString(a)){return null}try{return b.getResponseHeader(a)}catch(c){throw q["invalid_state_err"]}};this.getAllResponseHeaders=function(){try{return b.getAllResponseHeaders()}catch(a){throw q["invalid_state_err"]}};this.setRequestHeader=function(a,c){if(!p.hasArgument(arguments)||arguments.length==1){throw q["not_enough_args"]}else if(!a||!p.isString(a)||!c||!p.isString(c)){return}try{b.setRequestHeader(a,c)}catch(d){throw q["invalid_state_err"]}};this.__defineSetter__("onreadystatechange",function(d){if(p.isFunction(d)){c=true;b.onreadystatechange=function(){d.apply(a)}}else{c=false}});this.__defineGetter__("onreadystatechange",function(){if(c){return b.onreadystatechange}return null});this.toString=function(){return"[object XMLHttpRequest]"}};openDatabase=function(a,b,c,d){if(!p.hasArgument(arguments)){throw q["syntax_err"]}else if(!p.isString(a)){throw q["invalid_state_err"]}try{return new h(a)}catch(e){}};var n=function(){function f(a,b){var d=google.gears.factory.create("beta.httprequest");d.open("GET",a);d.onreadystatechange=function(){if(d.readyState==4&&d.status==200){c.sendMessage(d.responseText,b)}};d.send()}function e(a,c){b[c].queue.push(a)}function d(a){while(b[a].queue.length){var d=b[a].queue.shift();c.sendMessage(d,a)}}var a="html5_worker.js";var b={};var c=google.gears.factory.create("beta.workerpool");c.onmessage=function(a,c,e){if(e.body.type=="ready"){b[e.sender].ready=true;d(e.sender)}else if(e.body.type=="message"){var f=b[e.sender].main;var g=f.onmessage;if(p.isFunction(g)){g.call(f,{data:e.body.content})}}else if(e.body.type=="error"){var f=b[e.sender].main;var h=f.onerror;if(p.isFunction(h)){h.call(f,e.body.content)}}else if(e.body.type=="debug"){}};this.createNewWorker=function(d,e){var g=c.createWorkerFromUrl(a);f(d,g);b[g]={queue:new Array,main:e,ready:false};return g};this.postToWorker=function(a,d){if(b[d].ready&&!b[d].queue.length){c.sendMessage(a,d)}else{e(a,d)}};return this}();Worker=function(a){if(!n){throw"Elemented with id 'html5_init' is not found. Worker with "+a+" cannot be created"}if(!p.hasArgument(arguments)){throw q["not_enough_args"]}if(!p.isString(a)){a=" "}else if(!a.length){throw q["syntax_err"]}var b=null;var c;var d=this;this.__defineSetter__("onmessage",function(a){if(!p.isFunction(a)){b=null;return}else{b=a}});this.__defineGetter__("onmessage",function(){return b});this.postMessage=function(a){if(!p.isPositiveNumber(c)){return}if(p.hasTooManyArguments(arguments)){throw q["worker_error_message_port"]}n.postToWorker(a,c)};this.__defineSetter__("onerror",function(a){window.onerror=a});this.__defineGetter__("onerror",function(){return window.onerror});this.toString=function(){return"[object Worker]"};if(a.indexOf(".js")!=-1){c=n.createNewWorker(a,d)}};var p=new o;var q=function(){var a={geo_watch_getCurrent:new Error("TYPE_MISMATCH_ERR:DOM Exception 17"),geo_clearWatch:new Error("Unexpected error: Not enough arguments [nsIDOMGeoGeolocation.clearWatch]"),geo_coordinates_nullUndefinedLatitude:new Error("Latitude should not be null or undefined"),geo_coordinates_nullUndefinedLongitude:new Error("Longitude should not be null or undefined"),invalid_state_err:new Error("INVALID_STATE_ERR: DOM Exception 11"),syntax_err:new Error("SYNTAX_ERR: DOM Exception 12"),type_mismatch_err:new Error("TYPE_MISMATCH_ERR: DOM Exception 17"),not_enough_args:new SyntaxError("Not enough arguments"),not_authorized:"not authorized",constraint_failed:"constraint failed",db_error_unknown:"Unknown database error occured",worker_error_message_port:new Error("Type error"),TMP_ERROR:new Error("Temporary Error Message")};return a}()})()
