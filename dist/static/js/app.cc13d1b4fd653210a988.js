webpackJsonp([1],{"6Lax":function(t,e){},"6fVB":function(t,e){},ICkv:function(t,e){},MhCt:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("/ocq"),a=n("c/Tr"),o=n.n(a),s=n("Dd8w"),l=n.n(s),d=n("NYxO"),u=n("//Fk"),c=n.n(u),f=n("d4mZ"),p=f.stor,h=f.Board,v=f.List,m=f.Card,b=function(){return new c.a(function(t,e){t({list:p.getBoards()})})},C=function(t){return new c.a(function(e,n){e({item:p.getBoard(parseInt(t))})})},_=function(t){return new c.a(function(e,n){var r=new h({title:t});e({item:p.addBoard(r)})})},T=function(t,e){return new c.a(function(n,r){n({item:p.updateBoard(parseInt(t),e)})})},g=function(t){return new c.a(function(e,n){p.deleteBoard(parseInt(t)),e()})},y=function(t){return new c.a(function(e,n){var r=new v(t);e({item:p.addList(r)})})},D=function(t,e){return new c.a(function(n,r){n({item:p.updateList(parseInt(t),e)})})},E=function(t){return new c.a(function(e,n){p.deleteList(parseInt(t)),e()})},k=function(t){return new c.a(function(e,n){e({item:p.getCard(parseInt(t))})})},A=function(t){return new c.a(function(e,n){var r=new m(t);e({item:p.addCard(r)})})},x=function(t,e){return new c.a(function(n,r){n({item:p.updateCard(parseInt(t),e)})})},I=function(t){return new c.a(function(e,n){p.deleteCard(parseInt(t)),e()})},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",[t._v("default header")])],2),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body",[t._v("default body")])],2),t._v(" "),n("div",{staticClass:"modal-footer"},[t._t("footer",[t._v("\n            default footer\n            "),n("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v("OK")])])],2)])])])])},staticRenderFns:[]};var S=n("VU/8")({},B,!1,function(t){n("vrEL")},null,null).exports,w={components:{Modal:S},data:function(){return{inputBoardTitle:"",isValidInput:!1}},watch:{inputBoardTitle:function(t){this.isValidInput=!!t.trim().length}},mounted:function(){this.$refs.inputBoardTitle.focus()},methods:l()({},Object(d.d)(["SET_IS_ADD_BOARD"]),Object(d.b)(["ADD_BOARD","FETCH_BOARDS"]),{onSubmitCreateBoard:function(){var t=this;this.inputBoardTitle.trim()&&this.ADD_BOARD(this.inputBoardTitle).then(function(e){return t.$router.push("/board/"+e)}).catch(function(t){return console.log(t)}).finally(function(e){return t.SET_IS_ADD_BOARD(!1)})},onCloseAddBoard:function(){this.SET_IS_ADD_BOARD(!1)}})},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h2",[t._v("\n      Create new board\n      "),n("a",{staticClass:"modal-default-button",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onCloseAddBoard(e)}}},[t._v("×")])])]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("form",{attrs:{id:"add-board-form"},on:{submit:function(e){return e.preventDefault(),t.onSubmitCreateBoard(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputBoardTitle,expression:"inputBoardTitle"}],ref:"inputBoardTitle",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputBoardTitle},on:{input:function(e){e.target.composing||(t.inputBoardTitle=e.target.value)}}})])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn",class:{"btn-success":t.isValidInput},attrs:{type:"submit",form:"add-board-form",disabled:!t.isValidInput}},[t._v("Create Board")])])])},staticRenderFns:[]},L={components:{AddBoard:n("VU/8")(w,O,!1,null,null,null).exports},computed:l()({},Object(d.e)({isAddBoard:"isAddBoard",boardList:"boardList"})),created:function(){this.FETCH_BOARD_LIST(),this.SET_THEME()},updated:function(){o()(document.querySelectorAll(".board-item")).forEach(function(t){t.style.backgroundColor=t.dataset.bgcolor||"#ddd"})},methods:l()({},Object(d.d)(["SET_IS_ADD_BOARD","SET_THEME"]),Object(d.b)(["FETCH_BOARD_LIST"]),{onClickCreateBoard:function(){this.SET_IS_ADD_BOARD(!0)}})},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"home-title"},[t._v("Personal Boards")]),t._v(" "),n("div",{staticClass:"board-list"},[t._l(t.boardList,function(e,r){return n("div",{key:r,staticClass:"board-item",attrs:{"data-bgcolor":e.bgColor}},[n("router-link",{attrs:{to:"/board/"+e.id}},[n("div",{staticClass:"board-item-title"},[t._v(t._s(e.title))])])],1)}),t._v(" "),n("div",{staticClass:"board-item"},[n("a",{staticClass:"new-board-btn",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onClickCreateBoard(e)}}},[t._v("Create new board")])])],2),t._v(" "),t.isAddBoard?n("AddBoard"):t._e()],1)},staticRenderFns:[]};var V=n("VU/8")(L,R,!1,function(t){n("nPyO")},null,null).exports,F={data:function(){return{email:"",password:"",error:"",returnPath:""}},computed:{invalidForm:function(){return!this.email||!this.password}},created:function(){this.returnPath=this.$route.query.returnPath||"/",this.SET_THEME()},methods:l()({},Object(d.d)(["SET_THEME"]),{onSubmit:function(){var t=this,e=this.email,n=this.password;this.$store.dispatch("LOGIN",{email:e,password:n}).then(function(){t.$router.push(t.returnPath)}).catch(function(e){t.error=e.response.data.error})}})},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h2",[t._v("Log in to Trello")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",[n("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"email",autofocus:"",placeholder:"test@test.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"123123"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn",class:{"btn-success":!t.invalidForm},attrs:{type:"submit",disabled:t.invalidForm}},[t._v("Log In")])]),t._v(" "),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e()])},staticRenderFns:[]};n("VU/8")(F,$,!1,function(t){n("idBH")},null,null).exports;var P=n("Gu7T"),j=n.n(P),U={components:{Modal:S},props:["pos","listId","boardId"],data:function(){return{inputCardKey:"",inputCardValue:"",isValidInput:!1}},computed:{validateInput:function(){return!!this.inputCardKey.trim().length&&!!this.inputCardValue.trim().length}},watch:{validateInput:function(t){this.isValidInput=t}},mounted:function(){this.$refs.inputCardKey.focus()},methods:l()({},Object(d.b)(["ADD_CARD","FETCH_BOARD"]),{onSubmitNewCard:function(){var t=this;if(this.inputCardKey.trim()&&this.inputCardValue.trim()){var e=this.inputCardKey,n=this.inputCardValue,r=this.pos,i=this.listId;this.ADD_CARD({key:e,value:n,listId:i,pos:r}).finally(function(e){t.$emit("close")})}},onCloseAddCard:function(){this.$emit("close")}})},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h2",[t._v("\n      Create new card\n      "),n("a",{staticClass:"modal-default-button",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onCloseAddCard(e)}}},[t._v("×")])])]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("form",{attrs:{id:"add-card-form"},on:{submit:function(e){return e.preventDefault(),t.onSubmitNewCard(e)}}},[n("label",[t._v("Key")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputCardKey,expression:"inputCardKey"}],ref:"inputCardKey",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputCardKey},on:{input:function(e){e.target.composing||(t.inputCardKey=e.target.value)}}}),t._v(" "),n("label",[t._v("Value")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputCardValue,expression:"inputCardValue"}],ref:"inputCardValue",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputCardValue},on:{input:function(e){e.target.composing||(t.inputCardValue=e.target.value)}}})])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn",class:{"btn-success":t.isValidInput},attrs:{type:"submit",form:"add-card-form",disabled:!t.isValidInput}},[t._v("Create Card ")])])])},staticRenderFns:[]};var H=n("VU/8")(U,N,!1,function(t){n("ICkv")},null,null).exports,M={props:["card","boardId","listId"],methods:l()({},Object(d.b)(["DELETE_CARD"]),{onClickDelete:function(){window.confirm("Delete this card?")&&this.DELETE_CARD(this.card.id)}})},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-item",attrs:{"data-card-id":t.card.id,"data-card-pos":t.card.pos}},[n("router-link",{attrs:{to:"/board/"+t.boardId+"/card/"+t.card.id}},[n("div",{},[t._v(t._s(t.card.key))]),t._v(" "),n("div",{},[t._v(t._s(t.card.value))]),t._v(" "),t.card.description?n("div",{staticClass:"card-item-meta"},[t._v("≡")]):t._e()]),t._v(" "),n("a",{staticClass:"delete-card-btn",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onClickDelete(e)}}},[t._v("×")])],1)},staticRenderFns:[]};var W={components:{AddCard:H,CardItem:n("VU/8")(M,K,!1,function(t){n("6fVB")},null,null).exports},props:["list"],data:function(){return{isEditTitle:!1,inputTitle:"",isAddCard:!1}},created:function(){this.inputTitle=this.list.title},computed:{lastCardPos:function(){var t=this.list.cards[this.list.cards.length-1],e=65535;return t&&(e=t.pos+e),e}},methods:l()({},Object(d.b)(["UPDATE_LIST","DELETE_LIST"]),{onClickTitle:function(){var t=this;this.isEditTitle=!0,this.$nextTick(function(e){t.$refs.inputTitle.focus()})},onSubmitTitle:function(){var t=this;if(this.inputTitle=this.inputTitle.trim(),this.inputTitle){var e=this.list.id,n=this.inputTitle;if(n===this.list.title)return this.isEditTitle=!1;this.UPDATE_LIST({id:e,title:n}).then(function(e){return t.isEditTitle=!1})}},onDeleteList:function(){window.confirm("Delete "+this.list.title+" list?")&&this.DELETE_LIST({id:this.list.id})},onClickCreateCard:function(){this.isAddCard=!0},onClickCloseCard:function(){this.isAddCard=!1}})},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list",attrs:{"data-list-id":t.list.id,"data-list-pos":t.list.pos}},[n("div",{staticClass:"list-header"},[t.isEditTitle?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTitle,expression:"inputTitle"}],ref:"inputTitle",staticClass:"form-control input-title",attrs:{type:"text"},domProps:{value:t.inputTitle},on:{blur:t.onSubmitTitle,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmitTitle(e)},input:function(e){e.target.composing||(t.inputTitle=e.target.value)}}}):n("div",{staticClass:"list-header-title",on:{click:t.onClickTitle}},[t._v(t._s(t.list.title))]),t._v(" "),n("a",{staticClass:"delete-list-btn",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onDeleteList(e)}}},[t._v("×")])]),t._v(" "),n("div",{staticClass:"card-list",attrs:{"data-list-id":t.list.id}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.list.cards.length,expression:"!list.cards.length"}],staticClass:"empty-card-item"}),t._v(" "),t._l(t.list.cards,function(e){return n("card-item",{key:t.list.id+"-"+e.pos,attrs:{card:e,boardId:t.list.boardId,listId:t.list.id}})})],2),t._v(" "),n("a",{staticClass:"add-card-btn",attrs:{href:"","data-list-id":t.list.id},on:{click:function(e){return e.preventDefault(),t.onClickCreateCard(e)}}},[t._v("+ Add a card..")]),t._v(" "),t.isAddCard?n("AddCard",{attrs:{boardId:t.list.boardId,listId:t.list.id,pos:t.lastCardPos},on:{close:t.onClickCloseCard}}):t._e()],1)},staticRenderFns:[]};var G=n("VU/8")(W,q,!1,function(t){n("yUJy")},null,null).exports,J={data:function(){return{isAddList:!1,inputTitle:""}},computed:l()({},Object(d.e)({board:"board"})),methods:l()({},Object(d.b)(["ADD_LIST"]),{onClickAddList:function(){var t=this;this.isAddList=!0,this.$nextTick(function(e){return t.$refs.inputTitle.focus()})},onSubmitTitle:function(){var t=this;if(this.inputTitle=this.inputTitle.trim(),!this.inputTitle)return this.restoreTitle();var e=this.inputTitle,n=this.board.id,r=this.board.lists[this.board.lists.length-1],i=r?2*r.pos:65535;this.ADD_LIST({title:e,boardId:n,pos:i}).then(function(e){return t.restoreTitle()})},restoreTitle:function(){this.isAddList=!1,this.inputTitle=""}})},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-list"},[t.isAddList?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTitle,expression:"inputTitle"}],ref:"inputTitle",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputTitle},on:{blur:t.restoreTitle,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmitTitle(e)},input:function(e){e.target.composing||(t.inputTitle=e.target.value)}}}):n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onClickAddList(e)}}},[t._v("+ Add another List")])])},staticRenderFns:[]};var Z=n("VU/8")(J,X,!1,function(t){n("nO+s")},"data-v-1e39a7f5",null).exports,Y={computed:l()({},Object(d.e)({board:"board"})),mounted:function(){o()(this.$el.querySelectorAll(".color-picker a")).forEach(function(t){t.style.backgroundColor=t.dataset.value})},methods:l()({},Object(d.d)(["SET_IS_SHOW_BOARD_MENU"]),Object(d.b)(["DELETE_BOARD","UPDATE_BOARD"]),{onClickClose:function(){this.SET_IS_SHOW_BOARD_MENU(!1)},onClickDeleteBoard:function(){var t=this;window.confirm("Delete "+this.board.title+" Board? ")&&this.DELETE_BOARD(this.board.id).then(function(e){return t.$router.push("/")}).finally(function(e){return t.SET_IS_SHOW_BOARD_MENU(!1)})},onClickChangeColor:function(t){var e=this,n=this.board.id,r=t.target.dataset.value;this.UPDATE_BOARD({id:n,bgColor:r}).then(function(t){document.querySelector("body").style.backgroundColor=e.board.bgColor,document.querySelector(".header").style.backgroundColor="rgba(0,0,0,.15)"})}})},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board-menu"},[n("div",{staticClass:"board-menu-header"},[n("div",{staticClass:"header-title"},[t._v("Menu")]),t._v(" "),n("a",{staticClass:"header-close-btn",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onClickClose(e)}}},[t._v("×")])]),t._v(" "),n("ul",{staticClass:"menu-list"},[n("li",[n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onClickDeleteBoard(e)}}},[t._v("Delete Board")])]),t._v(" "),n("li",[t._v("Change Background")]),t._v(" "),n("div",{staticClass:"color-picker"},[n("a",{attrs:{href:"","data-value":"rgb(0,121,191)"},on:{click:function(e){return e.preventDefault(),t.onClickChangeColor(e)}}}),t._v(" "),n("a",{attrs:{href:"","data-value":"rgb(210,144,52)"},on:{click:function(e){return e.preventDefault(),t.onClickChangeColor(e)}}}),t._v(" "),n("a",{attrs:{href:"","data-value":"rgb(81,152,57)"},on:{click:function(e){return e.preventDefault(),t.onClickChangeColor(e)}}}),t._v(" "),n("a",{attrs:{href:"","data-value":"rgb(176,70,50)"},on:{click:function(e){return e.preventDefault(),t.onClickChangeColor(e)}}})])])])},staticRenderFns:[]};var z=n("VU/8")(Y,Q,!1,function(t){n("wNci")},"data-v-0183c159",null).exports,tt=n("vx8o"),et=n.n(tt),nt=(n("ocVX"),{components:{List:G,AddList:Z,BoardSettings:z},data:function(){return{drakeList:null,drake:null,isEditTitle:!1,inputTitle:""}},watch:{$route:function(){this.fetchData()}},computed:l()({},Object(d.e)({board:"board",isShowBoardMenu:"isShowBoardMenu"})),created:function(){var t=this;this.fetchData().then(function(e){t.inputTitle=t.board.title,t.SET_THEME(t.board.bgColor)})},updated:function(){this.setListDraggable(),this.setCardDraggable()},methods:l()({},Object(d.d)(["SET_THEME","SET_IS_SHOW_BOARD_MENU"]),Object(d.b)(["FETCH_BOARD","UPDATE_BOARD","UPDATE_CARD","UPDATE_LIST"]),{fetchData:function(){return this.FETCH_BOARD(this.$route.params.id)},onClickTitle:function(){var t=this;this.isEditTitle=!0,this.$nextTick(function(){return t.$refs.inputTitle.focus()})},onClickShowMenu:function(){this.SET_IS_SHOW_BOARD_MENU(!0)},onSubmitTitle:function(){var t=this;if(this.inputTitle=this.inputTitle.trim(),this.inputTitle){var e=this.board.id,n=this.inputTitle;if(n===this.board.title)return this.isEditTitle=!1;this.UPDATE_BOARD({id:e,title:n}).then(function(e){return t.isEditTitle=!1})}},setCardDraggable:function(){var t=this;this.drake&&this.drake.destroy(),this.drake=et()([].concat(j()(this.$el.querySelectorAll(".card-list")))).on("drop",function(e,n,r,i){var a={id:1*e.dataset.cardId,listId:1*n.dataset.listId,pos:65535},s=null,l=null;o()(n.querySelectorAll(".card-item")).forEach(function(t,e,n){var r=1*t.dataset.cardId;a.id===r&&(s=e>0?{id:1*n[e-1].dataset.cardId,pos:1*n[e-1].dataset.cardPos}:null,l=e<n.length-1?{id:1*n[e+1].dataset.cardId,pos:1*n[e+1].dataset.cardPos}:null)}),!s&&l?a.pos=l.pos/2:!l&&s?a.pos=2*s.pos:l&&s&&(a.pos=(s.pos+l.pos)/2),t.UPDATE_CARD(a)})},setListDraggable:function(){var t=this;this.drakeList&&this.drakeList.destroy();var e=this.$el.querySelectorAll(".list-section"),n={invalid:function(t,e){return console.log(e.className),!/^list/.test(e.className)}};this.drakeList=et()([].concat(j()(e)),n),this.drakeList.on("drop",function(e,n,r,i){var a={id:1*e.children[0].dataset.listId,pos:65535},s=null,l=null;o()(n.querySelectorAll(".list")).forEach(function(t,e,n){a.id===1*t.dataset.listId&&(s=e>0?{id:1*n[e-1].dataset.listId,pos:1*n[e-1].dataset.listPos}:null,l=e<n.length-1?{id:1*n[e+1].dataset.listId,pos:1*n[e+1].dataset.listPos}:null)}),!s&&l?a.pos=l.pos/2:!l&&s?a.pos=2*s.pos:s&&l&&(a.pos=(s.pos+l.pos)/2),t.UPDATE_LIST(a)})}})}),rt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"board-wrapper"},[n("div",{staticClass:"board"},[n("div",{staticClass:"board-header"},[t.isEditTitle?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTitle,expression:"inputTitle"}],ref:"inputTitle",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputTitle},on:{blur:t.onSubmitTitle,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmitTitle(e)},input:function(e){e.target.composing||(t.inputTitle=e.target.value)}}}):n("span",{staticClass:"board-header-btn board-title",on:{click:t.onClickTitle}},[t._v(t._s(t.board.title))]),t._v(" "),n("a",{staticClass:"board-header-btn show-menu",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onClickShowMenu(e)}}},[t._v("... Show Menu")])]),t._v(" "),n("div",{staticClass:"list-section-wrapper"},[n("div",{staticClass:"list-section"},[t._l(t.board.lists,function(t){return n("div",{key:t.pos,staticClass:"list-wrapper"},[n("List",{attrs:{list:t}})],1)}),t._v(" "),n("div",{staticClass:"list-wrapper"},[n("add-list")],1)],2)]),t._v(" "),t.isShowBoardMenu?n("BoardSettings"):t._e(),t._v(" "),n("router-view",{attrs:{boardId:t.board.id}})],1)])])},staticRenderFns:[]};var it=n("VU/8")(nt,rt,!1,function(t){n("x59d")},null,null).exports,at={components:{Modal:S},props:["boardId"],data:function(){return{toggleKey:!1,toggleValue:!1}},computed:l()({},Object(d.e)({card:"card"})),created:function(){this.FETCH_CARD(this.$route.params.cid)},methods:l()({},Object(d.d)(["SET_CARD"]),Object(d.b)(["FETCH_CARD","UPDATE_CARD"]),{onClickClose:function(){this.$router.push("/board/"+this.boardId)},onClickSubmitCard:function(){var t=this.$refs.inputKey.value.trim();if(t){var e=this.$refs.inputValue.value.trim();e&&this.UPDATE_CARD({id:this.card.id,key:t,value:e}).then(function(t){return onClickClose()})}},onBlurInputKey:function(){this.toggleKey=!this.toggleKey,this.$refs.inputKey.value="bbb"},onBlurInputValue:function(){this.toggleValue=!this.toggleValue;this.$refs.inputValue.value.trim()}})},ot={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{staticClass:"modal-card"},[n("div",{staticClass:"modal-card-header",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"modal-card-header-title"},[t._v("Card Info")]),t._v(" "),n("a",{staticClass:"modal-close-btn",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onClickClose(e)}}},[t._v("×")])]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("h4",[t._v("Key")]),t._v(" "),n("input",{ref:"inputKey",staticClass:"form-control",attrs:{type:"text",readonly:!t.toggleKey},domProps:{value:t.card.key},on:{click:function(e){e.preventDefault(),t.toggleKey=!t.toggleKey},blur:t.onBlurInputKey}}),t._v(" "),n("h4",[t._v("Value")]),t._v(" "),n("input",{ref:"inputValue",staticClass:"form-control",attrs:{type:"text",readonly:!t.toggleValue},domProps:{value:t.card.value},on:{click:function(e){e.preventDefault(),t.toggleValue=!t.toggleValue},blur:t.onBlurInputValue}})]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("a",{staticClass:"btn btn-success",on:{click:function(e){return e.preventDefault(),t.onClickSubmitCard(e)}}},[t._v("submit")])])])},staticRenderFns:[]};var st=n("VU/8")(at,ot,!1,function(t){n("glgk")},null,null).exports,lt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    Not Found\n")])},staticRenderFns:[]};var dt=n("VU/8")({},lt,!1,function(t){n("MhCt")},null,null).exports,ut=n("BO1k"),ct=n.n(ut),ft=n("pFYg"),pt=n.n(ft),ht=n("fZjL"),vt=n.n(ht),mt=n("Xxa5"),bt=n.n(mt),Ct=n("exGp"),_t=n.n(Ct),Tt=n("sJst"),gt=n.n(Tt),yt={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,required:!1},exportFields:{type:Object,required:!1},defaultValue:{type:String,required:!1,default:""},title:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:function(){return[]}},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function}},computed:{idName:function(){return"export_"+(new Date).getTime()},downloadFields:function(){return void 0!==this.fields?this.fields:void 0!==this.exportFields?this.exportFields:void 0}},methods:{generate:function(){var t=this;return _t()(bt.a.mark(function e(){var n,r;return bt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.beforeGenerate){e.next=3;break}return e.next=3,t.beforeGenerate();case 3:if(n=t.data,"function"!=typeof t.fetch&&n){e.next=8;break}return e.next=7,t.fetch();case 7:n=e.sent;case 8:if(n&&n.length){e.next=10;break}return e.abrupt("return");case 10:if(r=t.getProcessedJson(n,t.downloadFields),"html"!==t.type){e.next=15;break}return e.abrupt("return",t.export(t.jsonToXLS(r),t.name.replace(".xls",".html"),"text/html"));case 15:if("csv"!==t.type){e.next=17;break}return e.abrupt("return",t.export(t.jsonToCSV(r),t.name.replace(".xls",".csv"),"application/csv"));case 17:return e.abrupt("return",t.export(t.jsonToXLS(r),t.name,"application/vnd.ms-excel"));case 18:case"end":return e.stop()}},e,t)}))()},export:function(){var t=_t()(bt.a.mark(function t(e,n,r){var i;return bt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=this.base64ToBlob(e,r),"function"!=typeof this.beforeFinish){t.next=4;break}return t.next=4,this.beforeFinish();case 4:gt()(i,n,r);case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),jsonToXLS:function(t){var e="<thead>",n=vt()(t[0]).length,r=this;for(var i in null!=this.title&&(e+=this.parseExtraData(this.title,'<tr><th colspan="'+n+'">${data}</th></tr>')),e+="<tr>",t[0])e+="<th>"+i+"</th>";return e+="</tr>",e+="</thead>",e+="<tbody>",t.map(function(t,n){for(var i in e+="<tr>",t)e+="<td>"+r.valueReformattedForMultilines(t[i])+"</td>";e+="</tr>"}),e+="</tbody>",null!=this.footer&&(e+="<tfoot>",e+=this.parseExtraData(this.footer,'<tr><td colspan="'+n+'">${data}</td></tr>'),e+="</tfoot>"),'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>'.replace("${table}",e).replace("${worksheet}",this.worksheet)},jsonToCSV:function(t){var e=[];for(var n in null!=this.title&&e.push(this.parseExtraData(this.title,"${data}\r\n")),t[0])e.push(n),e.push(",");return e.pop(),e.push("\r\n"),t.map(function(t){for(var n in t){var r='="'+t[n]+'"';r.match(/[,"\n]/)&&(r='"'+r.replace(/\"/g,'""')+'"'),e.push(r),e.push(",")}e.pop(),e.push("\r\n")}),null!=this.footer&&e.push(this.parseExtraData(this.footer,"${data}\r\n")),e.join("")},getProcessedJson:function(t,e){var n=this.getKeys(t,e),r=[],i=this;return t.map(function(t,e){var a={};for(var o in n){var s=n[o];a[o]=i.getValue(s,t)}r.push(a)}),r},getKeys:function(t,e){if(e)return e;var n={};for(var r in t[0])n[r]=r;return n},parseExtraData:function(t,e){var n="";if(Array.isArray(t))for(var r=0;r<t.length;r++)n+=e.replace("${data}",t[r]);else n+=e.replace("${data}",t);return n},getValue:function(t,e){var n="object"!==(void 0===t?"undefined":pt()(t))?t:t.field,r="string"!=typeof n?[]:n.split("."),i=this.defaultValue;return i=n?r.length>1?this.getValueFromNestedItem(e,r):this.parseValue(e[n]):e,t.hasOwnProperty("callback")&&(i=this.getValueFromCallback(i,t.callback)),i},valueReformattedForMultilines:function(t){return"string"==typeof t?t.replace(/\n/gi,"<br/>"):t},getValueFromNestedItem:function(t,e){var n=t,r=!0,i=!1,a=void 0;try{for(var o,s=ct()(e);!(r=(o=s.next()).done);r=!0){var l=o.value;n&&(n=n[l])}}catch(t){i=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw a}}return this.parseValue(n)},getValueFromCallback:function(t,e){if("function"!=typeof e)return this.defaultValue;var n=e(t);return this.parseValue(n)},parseValue:function(t){return t||0===t||"boolean"==typeof t?t:this.defaultValue},base64ToBlob:function(t,e){for(var n=window.btoa(window.unescape(encodeURIComponent(t))),r=atob(n),i=r.length,a=new Uint8ClampedArray(i);i--;)a[i]=r.charCodeAt(i);return new Blob([a],{type:e})}}},Dt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.idName},on:{click:this.generate}},[this._t("default",[this._v("\n\t\tDownload "+this._s(this.name)+"\n\t")])],2)},staticRenderFns:[]},Et=n("VU/8")(yt,Dt,!1,null,null,null).exports,kt=n("d4mZ"),At={components:{downloadExcel:Et},data:function(){return{json_fields:{"Board Id":"boardId",Board:"board","List Id":"listId",List:"list","Card Id":"id","Card Key":"key","Card Value":"value"},json_data:[],json_meta:[[{key:"charset",value:"utf-8"}]]}},created:function(){this.json_data=this.fetchData()},computed:l()({},Object(d.e)({}),Object(d.c)([])),methods:l()({},Object(d.d)([]),Object(d.b)([]),{fetchData:function(){var t=[];return kt.stor.getBoards().forEach(function(e){kt.stor.getBoard(e.id).lists.forEach(function(n){n.cards.forEach(function(r){r.boardId=e.id,r.board=e.title,r.listId=n.id,r.list=n.title,t.push(r)})})}),t}})},xt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("download-excel",{staticClass:"btn btn-success",attrs:{fetch:this.fetchData,fields:this.json_fields,worksheet:"My Worksheet",name:"mypass-data.xls"}},[this._v("\n    Download Data To Excel\n  ")]),this._v(" "),e("download-excel",{staticClass:"btn btn-success",attrs:{fetch:this.fetchData,fields:this.json_fields,type:"csv",name:"mypass-data.csv"}},[this._v("\n    Download Data To CSV\n  ")])],1)},staticRenderFns:[]};var It=n("VU/8")(At,xt,!1,function(t){n("fVW0")},null,null).exports,Bt={boardList:[],board:{lists:[]},card:{},isAddBoard:!1,isShowBoardMenu:!1,navbarColor:"#026aa7",bodyColor:"rgb(255,255,255)"},St={hasBoardList:function(t){return t.boardList.length>0}},wt={SET_BOARD_LIST:function(t,e){var n=e.list;t.boardList=n.map(function(t){return t})},SET_BOARD:function(t,e){var n=e.item;t.board=n},SET_IS_ADD_BOARD:function(t,e){t.isAddBoard=e},SET_CARD:function(t,e){t.card=e,console.log(t.card)},SET_THEME:function(t,e){t.bodyColor=e||"rgb(255,255,255)",t.navbarColor=e?"rgba(0,0,0,.15)":"#026aa7"},SET_IS_SHOW_BOARD_MENU:function(t,e){t.isShowBoardMenu=e}},Ot={FETCH_BOARD_LIST:function(t){var e=t.commit;return b().then(function(t){return e("SET_BOARD_LIST",t)})},FETCH_BOARD:function(t,e){var n=t.commit;return C(e).then(function(t){return n("SET_BOARD",t)})},ADD_BOARD:function(t,e){return _(e).then(function(t){return t.item.id})},UPDATE_BOARD:function(t,e){var n=t.state,r=t.dispatch,i=e.id,a=e.title,o=e.bgColor;return T(i,{title:a,bgColor:o}).then(function(t){return r("FETCH_BOARD",n.board.id)})},DELETE_BOARD:function(t,e){return g(e)},ADD_LIST:function(t,e){var n=t.state,r=t.dispatch,i=e.title,a=e.boardId,o=e.pos;return y({title:i,pos:o,boardId:a}).then(function(t){return r("FETCH_BOARD",n.board.id)})},UPDATE_LIST:function(t,e){var n=t.state,r=t.dispatch,i=e.id,a=e.title,o=e.pos;return D(i,{title:a,pos:o}).then(function(t){return r("FETCH_BOARD",n.board.id)})},DELETE_LIST:function(t,e){var n=t.state,r=t.dispatch,i=e.id,a=e.pos,o=e.title;return E(i,{pos:a,title:o}).then(function(t){return r("FETCH_BOARD",n.board.id)})},FETCH_CARD:function(t,e){var n=t.commit;return k(e).then(function(t){var e=t.item;return n("SET_CARD",e)})},ADD_CARD:function(t,e){var n=t.state,r=t.dispatch,i=e.key,a=e.value,o=e.pos,s=e.listId;return A({key:i,value:a,pos:o,listId:s}).then(function(t){return r("FETCH_BOARD",n.board.id)})},UPDATE_CARD:function(t,e){var n=t.state,r=t.dispatch,i=e.id,a=e.key,o=e.value,s=e.pos,l=e.listId;return x(i,{pos:s,key:a,value:o,listId:l}).then(function(t){return r("FETCH_BOARD",n.board.id)})},DELETE_CARD:function(t,e){var n=t.state,r=t.dispatch;return I(e).then(function(t){return r("FETCH_BOARD",n.board.id)})}};r.a.use(d.a);var Lt=new d.a.Store({state:Bt,getters:St,mutations:wt,actions:Ot});r.a.use(i.a);var Rt=new i.a({mode:"history",routes:[{path:"/",component:V},{path:"/export",component:It},{path:"/board/:id",component:it,children:[{path:"card/:cid",component:st}]},{path:"*",component:dt}]}),Vt={computed:l()({},Object(d.e)({navbarColor:"navbarColor",bodyColor:"bodyColor"})),watch:{bodyColor:"updateTheme"},mounted:function(){this.updateTheme()},methods:{updateTheme:function(){this.$el.style.backgroundColor=this.navbarColor;var t=document.querySelector("body");t&&(t.style.backgroundColor=this.bodyColor)}}},Ft={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"header"},[e("div",{staticClass:"header-logo"},[e("router-link",{attrs:{to:"/"}},[this._v("MyPass")])],1),this._v(" "),e("div",{staticClass:"header-auth"},[e("router-link",{attrs:{to:"/export"}},[this._v("export")])],1)])},staticRenderFns:[]};var $t={name:"app",components:{Navbar:n("VU/8")(Vt,Ft,!1,function(t){n("NvWm")},null,null).exports}},Pt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("router-view",{staticClass:"container"})],1)},staticRenderFns:[]};var jt=n("VU/8")($t,Pt,!1,function(t){n("6Lax")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",router:Rt,store:Lt,render:function(t){return t(jt)}})},NvWm:function(t,e){},d4mZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"stor",function(){return s}),n.d(e,"Board",function(){return u}),n.d(e,"List",function(){return c}),n.d(e,"Card",function(){return f});var r=n("Zrlr"),i=n.n(r),a=n("mvHQ"),o=n.n(a),s={getBoards:function(){return l("boards")},getLists:function(){return l("lists")},getCards:function(){return l("cards")},getBoard:function(t){var e=s.getBoards().find(function(e){return e.id==t});return e.lists=s.getLists().filter(function(e){return e.boardId==t}).sort(function(t,e){return t.pos-e.pos}),e.lists.forEach(function(t){t.cards=s.getCards().filter(function(e){return e.listId==t.id}).sort(function(t,e){return t.pos-e.pos})}),e},getList:function(t){return s.getLists().find(function(e){return e.id==t})},getCard:function(t){return s.getCards().find(function(e){return e.id==t})},addBoard:function(t){var e=s.getBoards();return e.push(t),d("boards",e),t},updateBoard:function(t,e){var n=s.getBoards(),r=n.findIndex(function(e){return e.id==t});return e.title&&(n[r].title=e.title),e.bgColor&&(n[r].bgColor=e.bgColor),d("boards",n),n[r]},deleteBoard:function(t){var e=s.getBoards().filter(function(e){return e.id!=t});d("boards",e)},addList:function(t){var e=s.getLists();return e.push(t),d("lists",e),t},updateList:function(t,e){var n=s.getLists(),r=n.findIndex(function(e){return e.id==t});return e.title&&(n[r].title=e.title),e.pos&&(n[r].pos=e.pos),d("lists",n),n[r]},deleteList:function(t){var e=s.getLists().filter(function(e){return e.id!=t});d("lists",e);var n=s.getCards().filter(function(e){return e.listId!=t});d("cards",n)},addCard:function(t){var e=s.getCards();return e.push(t),d("cards",e),t},updateCard:function(t,e){var n=s.getCards(),r=n.findIndex(function(e){return e.id==t});return e.key&&(n[r].key=e.key),e.value&&(n[r].value=e.value),e.pos&&(n[r].pos=e.pos),e.listId&&(n[r].listId=e.listId),d("cards",n),n[r]},deleteCard:function(t){var e=s.getCards().filter(function(e){return e.id!=t});d("cards",e)}},l=function(t){var e=localStorage.getItem(t);return e&&function(t){try{JSON.parse(t)}catch(t){return!1}return!0}(e)?JSON.parse(e):[]},d=function(t,e){return localStorage.setItem(t,o()(e)),l(t)},u=function t(e){var n=e.id,r=e.title,a=e.bgColor;i()(this,t),this.id=n||s.getBoards().length+1,this.title=r||"",this.bgColor=a||"rgb(0, 121, 191)"},c=function t(e){var n=e.id,r=e.title,a=e.pos,o=e.boardId;i()(this,t),this.id=n||s.getLists().length+1,this.title=r||"",this.pos=a||65535,this.boardId=o||1},f=function t(e){var n=e.id,r=e.key,a=e.value,o=e.pos,l=e.listId;i()(this,t),this.id=n||s.getCards().length+1,this.key=r||"",this.value=a||"",this.pos=o||65535,this.listId=l||1},p=new u({title:"Sample Board"}),h=[];h.push(p),0==s.getBoards().length&&localStorage.setItem("boards",o()(h))},fVW0:function(t,e){},glgk:function(t,e){},idBH:function(t,e){},"nO+s":function(t,e){},nPyO:function(t,e){},ocVX:function(t,e){},vrEL:function(t,e){},wNci:function(t,e){},x59d:function(t,e){},yUJy:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cc13d1b4fd653210a988.js.map