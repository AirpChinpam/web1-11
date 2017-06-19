
window.alert('こんちゃ。世界。');

document.getElementById('choice').textContent = new Date();

document.getElementById('choice').textContent = result;

var result = window.confirm('準備OK?');
//結果を表示

if(result){
 document.getElementById('choice').textContent = 'OKが押されました';
}else{
 document.getElementById('choice').textContent = 'キャンセルが押されました';
}

var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0~2の数字を入力してください!'));

var message;
while(1){
printf("==>");
scanf("%d",&number);
if(number==answer){
printf("正解です。\n");
break;
}else{
printf("不正解です。\n");
}
 message = '0~3の数字を入力して';
}

document.getElementById('choice').textContent = message;

