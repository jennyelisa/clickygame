(window.webpackJsonpclickygame=window.webpackJsonpclickygame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Cuphead","image":"https://vignette.wikia.nocookie.net/cuphead/images/6/65/Cuphoof.png/revision/latest/scale-to-width-down/160?cb=20181020175810"},{"id":2,"name":"Mugman","image":"https://vignette.wikia.nocookie.net/cuphead/images/9/9e/Mugman_results.png/revision/latest?cb=20171209225949"},{"id":3,"name":"King Dice","image":"https://giantbomb1.cbsistatic.com/uploads/square_small/37/375443/3011181-cuphead_king_dice_sprite.png"},{"id":4,"name":"Ms. Chalice","image":"https://vignette.wikia.nocookie.net/cuphead/images/7/72/Ms._Chalice_Infobox_Image.png/revision/latest?cb=20180612000720"},{"id":5,"name":"Cala Maria","image":"https://vignette.wikia.nocookie.net/great-characters/images/7/79/Cala_Maria.png/revision/latest?cb=20180618052336"},{"id":6,"name":"Baroness Von Bon Bon","image":"https://vignette.wikia.nocookie.net/cuphead/images/a/a1/BVBBintro.png/revision/latest?cb=20171213192755"},{"id":7,"name":"Captin Brineybeard","image":"https://vignette.wikia.nocookie.net/cuphead/images/d/de/HELP_ME.png/revision/latest?cb=20180302065309"},{"id":8,"name":"Ribby and Croaks","image":"https://vignette.wikia.nocookie.net/cuphead/images/3/3b/Ribby_and_Croaks.png/revision/latest?cb=20180224193508"},{"id":9,"name":"Grim Matchstick","image":"https://vignette.wikia.nocookie.net/cuphead/images/0/06/Drag_mor.png/revision/latest/scale-to-width-down/241?cb=20171024022720"},{"id":10,"name":"Hilda Berg","image":"https://vignette.wikia.nocookie.net/cuphead/images/b/b6/Hilda_Berg_Intro_Sprite.png/revision/latest?cb=20180420205506"},{"id":11,"name":"Djimmi The Great","image":"https://vignette.wikia.nocookie.net/cuphead/images/8/8c/Genie.png/revision/latest/scale-to-width-down/158?cb=20171028124603"},{"id":12,"name":"Sally Stageplay","image":"https://vignette.wikia.nocookie.net/cuphead/images/6/6a/Sally_Stageplay_Normal_Sprite.png/revision/latest/scale-to-width-down/310?cb=20180409204958"}]')},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(3),s=a.n(c),o=(a(14),a(4)),r=a(5),l=a(7),m=a(6),h=a(8);a(15),a(16);var g=function(e){return n.a.createElement("div",{key:e.id,className:"card col-md-3 cupheadChara",onClick:function(){return e.userClicks(e.id)}},n.a.createElement("img",{alt:e.name,src:e.image,width:"175px",height:"175px"}))},d=(a(17),function(e){return n.a.createElement("div",{id:"header",className:"gameHeader"},n.a.createElement("h1",null,"CupHead"),n.a.createElement("div",{className:"stats"},n.a.createElement("label",null,"Score: ",e.score),n.a.createElement("label",null,"Wins: ",e.wins),n.a.createElement("label",null,"Losses: ",e.losses),n.a.createElement("label",null,"High Score: ",e.highScore)))});a(18);var u=function(e){return n.a.createElement("h1",{className:"title"},e.children,n.a.createElement("p",null,"Try not to click the same picture twice!"))},p=a(1),k=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=e[a];e[a]=e[t],e[t]=i}return e},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={characters:p,clickedImgs:[],wins:0,losses:0,highScore:0,score:0},a.userClicks=function(e){var t=a.state.clickedImgs,i=a.state.score,n=a.state.highScore;-1===t.indexOf(e)?(t.push(e),a.incrementScore(),a.charaShuffle()):12===a.state.score?(alert("You Win \ud83e\udd73 \ud83c\udfc6"),a.setState({score:0,wins:1,clickedImgs:[]})):(a.setState({score:0,clickedImgs:[]}),alert("I won't sugarcoat it...you never stood a chance! - Baroness Von Bon Bon, Try Again!")),i>n&&a.setState({highScore:i})},a.incrementScore=function(){a.setState({score:a.state.score+1})},a.charaShuffle=function(){a.setState({characters:k(p)})},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(d,{score:this.state.score,highScore:this.state.highScore,wins:this.state.wins,losses:this.state.losses}),n.a.createElement(u,null),this.state.characters.map(function(t){return n.a.createElement(g,{key:t.id,name:t.name,image:t.image,userClicks:e.userClicks,id:t.id})}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.fa6c3f39.chunk.js.map