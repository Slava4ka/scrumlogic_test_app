(this.webpackJsonpscrumlogic_app=this.webpackJsonpscrumlogic_app||[]).push([[0],{13:function(e,t,n){e.exports={endPoint:"EndPoint_endPoint__FWEVJ",endPoint__TextBox:"EndPoint_endPoint__TextBox__Q5m2R",endPoint__linkBox:"EndPoint_endPoint__linkBox__3vuZ2",endPoint__text:"EndPoint_endPoint__text__3k7j2",endPoint__link:"EndPoint_endPoint__link__1W8NK",endPoint__link_margin:"EndPoint_endPoint__link_margin__19PZh",endPoint__margin:"EndPoint_endPoint__margin__2Gw_y"}},131:function(e,t,n){e.exports=n(242)},136:function(e,t,n){},137:function(e,t,n){},15:function(e,t,n){e.exports={testPoint:"TestPoint_testPoint__3aSap",testPoint__headerLabel:"TestPoint_testPoint__headerLabel__633lZ",testPoint__questionLabel:"TestPoint_testPoint__questionLabel__AmOJx",testPoint__headerLabel_margin:"TestPoint_testPoint__headerLabel_margin__3m1Wx",testPoint__questionLabel_margin:"TestPoint_testPoint__questionLabel_margin__1lf_0",testPoint__body_margin:"TestPoint_testPoint__body_margin__3JwOA"}},19:function(e,t,n){e.exports={welcomePoint:"WelcomePoint_welcomePoint__ws19Y",label:"WelcomePoint_label__cS-F-",welcomePoint__header:"WelcomePoint_welcomePoint__header__1Q1MD",welcomePoint__button:"WelcomePoint_welcomePoint__button__3QScs",label_margin:"WelcomePoint_label_margin__IIq7W",btn:"WelcomePoint_btn__1DPlI",btn_margin:"WelcomePoint_btn_margin__3Zah4"}},20:function(e,t,n){e.exports={continuationPoint:"ContinuationPoint_continuationPoint__3-Pt0",label:"ContinuationPoint_label__1RanP",continuationPoint__header:"ContinuationPoint_continuationPoint__header__2VpAO",continuationPoint__buttons:"ContinuationPoint_continuationPoint__buttons__2YhPh",label_margin:"ContinuationPoint_label_margin__2cXtr",btn:"ContinuationPoint_btn__2Yo9W"}},242:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(46),r=n.n(s),o=(n(136),n(137),n(9)),c=n(6),u=n(99),l=n(49),_=n(14),m=n(52),d="scrumlogic_app/testing-reducer/SET-USER-ANSWERS",g="scrumlogic_app/testing-reducer/SET-NEXT-CURRENT-QUESTION",P="scrumlogic_app/testing-reducer/DROP-USER-ANSWERS",b="scrumlogic_app/testing-reducer/SET-TESTS-START",E="scrumlogic_app/testing-reducer/SET-TESTS-FINISH",f="scrumlogic_app/testing-reducer/TOGGLE-SCREEN-SIZE-FIX-FLAG",h={testName:m.name,testQuestions:m.questions,questionsQuantity:m.questions.length,isTestStart:!1,currentQuestion:!1,userAnswers:[],correctAnswersCounter:0,screenFixFlag:!1},v=function(e,t){var n=Object.keys(t)[0];return Object(_.a)({},e,Object(l.a)({},n,t[n]))},p=function(e,t){return e.map((function(e){var n,a,i,s=e.answers.find((function(n){return n.value===t["questionId_".concat(e.questionId)]}));return n=e.questionId,a=s.value,i=s.right,{questionId:n,value:a,right:i}}))},w=function(e){return e.filter((function(e){return e.right})).length},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(_.a)({},e,{currentQuestion:e.currentQuestion+1});case d:return Object(_.a)({},e,{userAnswers:v(e.userAnswers,t.value)});case b:return Object(_.a)({},e,{isTestStart:!0,currentQuestion:1});case E:return Object(_.a)({},e,{isTestStart:!1,currentQuestion:!1});case P:return Object(_.a)({},e,{userAnswers:[],correctAnswersCounter:0});case"scrumlogic_app/testing-reducer/GET-THE-NUMBER-OF-CORRECT-ANSWERS":return Object(_.a)({},e,{correctAnswersCounter:w(p(e.testQuestions,e.userAnswers))});case f:return Object(_.a)({},e,{screenFixFlag:!e.screenFixFlag});default:return e}},N=n(73),x=n(101),T={key:"testingPresistedStore",storage:n.n(x).a,whitelist:["testName","isTestStart","currentQuestion","userAnswers","screenFixFlag"]},O=Object(c.b)({form:u.a,testingPresistedStore:Object(N.a)(T,S)}),q=Object(c.c)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());window.__store__=q;var y=Object(N.b)(q),A=q,Q=n(105),F=n(37),B=n.n(F),C=n(19),I=n.n(C),j=function(e){var t=e.setBodyState,n=e.testName,a=e.testStart,s=e.isTestStart,r=e.currentQuestion;s&&r>0&&t(4);return i.a.createElement("div",{className:"".concat(I.a.welcomePoint)},i.a.createElement("div",{className:I.a.welcomePoint__header},i.a.createElement("p",{className:"".concat(I.a.label," ").concat(I.a.label_margin)},n)),i.a.createElement("div",{className:I.a.welcomePoint__button},i.a.createElement("button",{className:"".concat(I.a.btn," ").concat(I.a.btn_margin),onClick:function(){t(2),a()}},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442")))},k=n(15),R=n.n(k),W=n(32),L=n(69),U=n.n(L),D=Object(o.b)()((function(e){var t=e.input,n=e.type,a=e.disabled,s=e.dispatch;return i.a.createElement("div",{className:U.a.radio},i.a.createElement("label",{className:U.a.radio__label},i.a.createElement("input",Object.assign({},t,{type:n,placeholder:"test",value:t.value,disabled:a,onChange:function(){return function(){t.onChange(t.value);var e;return(e=1,new Promise((function(t){return setTimeout(t,e)}))).then((function(){s(Object(W.b)("testPoint")),s(Object(W.a)("testPoint"))}))}()}})),t.value))})),X=n(97),G=n(98),J=function(e){return["\u0432\u043e\u043f\u0440\u043e\u0441","\u0432\u043e\u043f\u0440\u043e\u0441\u0430","\u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432"][e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]},H=Object(G.a)({form:"testPoint"})((function(e){var t=e.handleSubmit,n=e.question,a=e.value;return i.a.createElement("form",{onSubmit:t},i.a.createElement(X.a,{name:"questionId_".concat(n.questionId),type:"radio",component:D,value:a}))})),Z=function(e){var t=e.onSubmit,n=e.testQuestions,a=e.questionsQuantity,s=e.currentQuestion,r=n[s-1];return i.a.createElement("div",{className:R.a.testPoint},i.a.createElement("div",{className:R.a.testPoint__windowHeader},i.a.createElement("p",{className:"".concat(R.a.testPoint__headerLabel," ").concat(R.a.testPoint__headerLabel_margin)},"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e ",s," ",J(s)," \u0438\u0437"," ",a)),i.a.createElement("div",{className:R.a.testPoint__question},i.a.createElement("p",{className:"".concat(R.a.testPoint__questionLabel," ").concat(R.a.testPoint__questionLabel_margin)},"\u0412\u043e\u043f\u0440\u043e\u0441 \u2116",s,": ",r.question)),i.a.createElement("div",{className:R.a.testPoint__body_margin},r.answers.map((function(e,n){return i.a.createElement(H,{key:n,onSubmit:t,question:r,value:e.value})}))))},z=n(13),V=n.n(z),M=function(e){var t=e.setBodyState,n=e.questionsQuantity,s=e.dropAnswers,r=e.getNumberOfCorrectAnswers,o=e.correctAnswersCounter;Object(a.useEffect)((function(){r()}));return i.a.createElement("div",{className:"".concat(V.a.endPoint," ").concat(V.a.endPoint__margin)},i.a.createElement("div",{className:V.a.endPoint__TextBox},i.a.createElement("div",null,i.a.createElement("p",{className:V.a.endPoint__text},"\u0422\u0435\u0441\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d."),i.a.createElement("p",{className:V.a.endPoint__text},"\u0412\u044b \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438"),i.a.createElement("p",{className:V.a.endPoint__text},"\u043d\u0430 ",o," ",J(o)," \u0438\u0437"," ",n,"."))),i.a.createElement("div",{className:V.a.endPoint__linkBox},i.a.createElement("p",{className:"".concat(V.a.endPoint__link," ").concat(V.a.endPoint__link_margin),onClick:function(){return s(),void t(1)}},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u0437\u0430\u043d\u043e\u0432\u043e")))},Y=n(20),K=n.n(Y),$=function(e){var t=e.setBodyState,n=e.dropAnswers,a=e.testFinish;return i.a.createElement("div",{className:K.a.continuationPoint},i.a.createElement("div",{className:K.a.continuationPoint__header},i.a.createElement("p",{className:"".concat(K.a.label," ").concat(K.a.label_margin)},"\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e?")),i.a.createElement("div",{className:K.a.continuationPoint__buttons},i.a.createElement("button",{className:K.a.btn,onClick:function(){t(2)}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),i.a.createElement("button",{className:K.a.btn,onClick:function(){a(),n(),t(1)}},"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e")))},ee=Object(o.b)((function(e){return{testQuestions:e.testingPresistedStore.testQuestions,testName:e.testingPresistedStore.testName,questionsQuantity:e.testingPresistedStore.questionsQuantity,isTestStart:e.testingPresistedStore.isTestStart,currentQuestion:e.testingPresistedStore.currentQuestion,correctAnswersCounter:e.testingPresistedStore.correctAnswersCounter,screenFixFlag:e.testingPresistedStore.screenFixFlag}}),{setAnswers:function(e){return{type:d,value:e}},testStart:function(){return{type:b}},testFinish:function(){return{type:E}},dropAnswers:function(){return{type:P}},getNumberOfCorrectAnswers:function(){return{type:"scrumlogic_app/testing-reducer/GET-THE-NUMBER-OF-CORRECT-ANSWERS"}},nextQuestion:function(){return{type:g}}})((function(e){var t=e.testQuestions,n=e.testName,s=e.questionsQuantity,r=e.isTestStart,o=e.currentQuestion,c=e.setAnswers,u=e.testStart,l=e.testFinish,_=e.dropAnswers,m=e.getNumberOfCorrectAnswers,d=e.correctAnswersCounter,g=e.nextQuestion,P=e.screenFixFlag,b=Object(a.useState)(1),E=Object(Q.a)(b,2),f=E[0],h=E[1],v=function(e,t,n,a,s,r,o,c,u,l,_,m,d){switch(e){case 1:return i.a.createElement(j,{setBodyState:t,testName:s,testStart:u,isTestStart:o,currentQuestion:c});case 2:return i.a.createElement(Z,{setBodyState:t,onSubmit:n,testQuestions:a,questionsQuantity:r,currentQuestion:c});case 3:return i.a.createElement(M,{setBodyState:t,questionsQuantity:r,dropAnswers:l,getNumberOfCorrectAnswers:_,correctAnswersCounter:m});case 4:return i.a.createElement($,{setBodyState:t,dropAnswers:l,testFinish:d});default:return i.a.createElement(j,{setBodyState:t})}}(f,h,(function(e){g(),c(e),o===s&&(l(),h(3))}),t,n,s,r,o,u,_,m,d,l);return i.a.createElement("div",{className:B.a.testingPage},i.a.createElement("div",{className:"".concat(B.a.testingBox," ").concat(P?B.a.testingBox_fixSize:B.a.testingBox_expanding)},v))})),te=n(103),ne=n.n(te),ae=n(72),ie=n.n(ae),se=Object(o.b)((function(e){return{screenFixFlag:e.testingPresistedStore.screenFixFlag}}),{toggleFlag:function(){return{type:f}}})((function(e){var t=e.screenFixFlag,n=e.toggleFlag;return i.a.createElement("div",{className:ie.a.switcherBox},i.a.createElement("span",null,"\u0417\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430"),i.a.createElement(ne.a,{className:ie.a.switcher,onChange:n,checked:t,onColor:"#296faf",uncheckedIcon:!1,checkedIcon:!1}))})),re=n(104);var oe=function(){return i.a.createElement(o.a,{store:A},i.a.createElement(re.a,{loading:i.a.createElement("div",null,"Loading"),persistor:y},i.a.createElement("div",{className:"App"},i.a.createElement(se,null),i.a.createElement(ee,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,t,n){e.exports={testingPage:"Testing_testingPage__3IDRh",testingBox:"Testing_testingBox__36mlv",testingBox_fixSize:"Testing_testingBox_fixSize__2gg8-",testingBox_expanding:"Testing_testingBox_expanding__2_LKT"}},52:function(e){e.exports=JSON.parse('{"name":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0435\u0441\u0442\u0430","questions":[{"questionId":1,"question":"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0435\u0441\u0438\u0442 \u043a\u0443\u0431 \u0431\u0435\u0442\u043e\u043d\u0430 \u041c 250?","answers":[{"value":"2348 \u043a\u0433","right":true},{"value":"2000 \u043a\u0433","right":false},{"value":"3543 \u043a\u0433","right":false},{"value":"2999 \u043a\u0433","right":false}]},{"questionId":2,"question":"\u041a\u0442\u043e \u0438\u0433\u0440\u0430\u043b \u0440\u043e\u043b\u044c \u0411\u044d\u0442\u043c\u0435\u043d\u0430 \u0432 \u0442\u0440\u0438\u043b\u043e\u0433\u0438\u0438 \u041a\u0440\u0438\u0441\u0442\u043e\u0444\u0435\u0440\u0430 \u041d\u043e\u043b\u0430\u043d\u0430?","answers":[{"value":"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0425\u0430\u0431\u0435\u043d\u0441\u043a\u0438\u0439","right":false},{"value":"\u0414\u0436\u0435\u0439\u043a \u0414\u0436\u0438\u043b\u043b\u0435\u043d\u0445\u043e\u043b","right":false},{"value":"\u0420\u043e\u0431\u0435\u0440\u0442 \u0414\u0430\u0443\u043d\u0438 \u2014 \u043c\u043b\u0430\u0434\u0448\u0438\u0439","right":false},{"value":"\u041a\u0440\u0438\u0441\u0442\u0438\u0430\u043d \u0411\u044d\u0439\u043b","right":true}]},{"questionId":3,"question":"\u041a\u0430\u043a \u0437\u043e\u0432\u0443\u0442 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f \u043f\u043e\u0432\u0435\u0441\u0442\u0438 \u041d\u0438\u043a\u043e\u043b\u0430\u044f \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447\u0430 \u0413\u043e\u0433\u043e\u043b\u044f \\"\u0428\u0438\u043d\u0435\u043b\u044c\\"?","answers":[{"value":"\u0418\u0432\u0430\u043d \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447 \u0425\u043b\u0435\u0441\u0442\u0430\u043a\u043e\u0432","right":false},{"value":"\u0410\u043a\u0430\u043a\u0438\u0439 \u0410\u043a\u0430\u043a\u0438\u0435\u0432\u0438\u0447 \u0411\u0430\u0448\u043c\u0430\u0447\u043a\u0438\u043d","right":true},{"value":"\u041c\u0438\u0445\u0430\u0438\u043b \u0421\u0435\u043c\u0451\u043d\u043e\u0432\u0438\u0447 \u0421\u043e\u0431\u0430\u043a\u0435\u0432\u0438\u0447","right":false},{"value":"\u0410\u043a\u0441\u0435\u043d\u0442\u0438\u0439 \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447 \u041f\u043e\u043f\u0440\u0438\u0449\u0438\u043d","right":false}]},{"questionId":4,"question":"\u0427\u0435\u043c\u0443 \u0440\u0430\u0432\u043d\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0441\u0432\u0435\u0442\u0430 \u0432 \u0432\u0430\u043a\u0443\u0443\u043c\u0435?","answers":[{"value":"300 000 \u043a\u043c/\u0441","right":true},{"value":"250 000 \u043a\u043c/\u0441","right":false},{"value":"423 000 \u043a\u043c/\u0441","right":false},{"value":"500 000 \u043a\u043c/\u0441","right":false}]},{"questionId":5,"question":"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0441\u0431\u043e\u0440\u043d\u0430\u044f \u0418\u0442\u0430\u043b\u0438\u0438 \u043f\u043e \u0444\u0443\u0442\u0431\u043e\u043b\u0443 \u0431\u044b\u043b\u0430 \u0447\u0435\u043c\u043f\u0438\u043e\u043d\u043e\u043c \u043c\u0438\u0440\u0430?","answers":[{"value":"2","right":false},{"value":"3","right":false},{"value":"4","right":true},{"value":"5","right":false}]},{"questionId":6,"question":"\u0421\u0442\u043e\u043b\u0446\u0438\u0446\u0430 \\"\u0422\u0440\u0438\u043d\u0438\u0434\u0430\u0434 \u0438 \u0422\u043e\u0431\u0430\u0433\u043e?\\"","answers":[{"value":"\u0421\u0435\u043d\u0442-\u0414\u0436\u043e\u0440\u0434\u0436\u0435\u0441","right":false},{"value":"\u0421\u0430\u043d-\u0424\u0435\u0440\u043d\u0430\u043d\u0434\u043e","right":false},{"value":"\u041f\u043e\u0440\u0442-\u043e\u0444-\u0421\u043f\u0435\u0439\u043d","right":true},{"value":"\u0421\u0430\u043d-\u0425\u0443\u0430\u043d","right":false}]}]}')},69:function(e,t,n){e.exports={radio:"RadioButton_radio__1H3zx",radio__label:"RadioButton_radio__label__3Nlpx"}},72:function(e,t,n){e.exports={switcherBox:"WindowSwitch_switcherBox__18TUq",switcher:"WindowSwitch_switcher__32soU"}}},[[131,1,2]]]);
//# sourceMappingURL=main.cfb0c1f6.chunk.js.map