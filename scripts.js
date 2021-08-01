(() => {

  //Chapter2

  // テンプレート文字列
  let inoki = "123だー!";

  console.log("元気があれば何でもできる！${inoki}");
  console.log(`元気があれば何でもできる！${inoki}`);


  console.log(`こんにちは、こんばんは、さようなら`);

  // 配列リテラル
  let data = ["111", "222", "333", "444"];

  console.log(data[0]);

  // オブジェクトリテラル
  let obj = {A:1, B:2, C:3};

  console.log(obj.A);   //ドット演算子
  console.log(obj["A"]);    //ブラケット構文

// 少数
  console.log(0.2 * 3);
  console.log(0.2 * 3 == 0.6);
  console.log((0.2 * 10) * 3 == 0.6 * 10);

  function btn_click() {
    window.alert("ボタンですけど何か？")
  }

  /*
  ・構造化プログラミング・
  1.記述された順番に処理を行っていく、順次
  2.条件によって処理を分岐する、選択
  3.特定の処理を繰り返し実行する、反復
  */

  //if命令
  let hoge1 = 15;
  if ( hoge1 >= 20 ) {
    console.log("20以上");
  } else if (hoge1 >= 10) {
    console.log("10以上");
  } else {
    console.log("10未満");
  }

  let hoge2 = 9;
  if (hoge2 >= 10){
    if(hoge2 >= 20) {
      console.log("20以上");
    } else {
      console.log("10以上20未満");
    }
  } else {
    console.log("10未満");
  }

  //switch命令
  let rank = "B"
  switch(rank) {
    case "A" :
      console.log("A");
      break;
    case "B" :
      console.log("B");
      break;
    case "C" :
      console.log("C");
      break;
    default :
      console.log("ABC");
      break;
  }

  switch(rank) {
    case "A" :
    case "B" :
    case "C" :
      console.log("合格");
      break;
    case "D" :
      console.log("不合格");
      break
  }

  //while/do…while命令
  // while　前置判断→条件によっては１度もループを実行しない
  // do while　後置判断→条件にかかわらず、最低１回はループを実行
  let hoge3 = 8;
  while(hoge3 < 10) {
    console.log("hoge3は" + hoge3);
    hoge3++;
  }

  let hoge4 = 7;

  do {
    console.log("hoge4はa" + hoge4);
    hoge4++;
  } while(hoge4 < 10);

  //for命令
  let hogehoge6 = document.getElementById("hogehoge6")
  for (var hoge6 = 5; hoge6 < 10; hoge6++) {
    hogehoge6.innerHTML = hoge6 + "&nbsp";
  }

  //Chapter3

  /*

  ・new演算子
  let 変数名 = new オブジェクト名([引数, ...])

  ・プロパティ/メソッドの呼び出し
  変数名.プロパティ名[= 設定値];
  変数名.メソッド名([引数 [,...]]);

  ・静的プロパティ/静的メソッドの呼び出し
  オブジェクト名.プロパティ名[= 設定値];
  オブジェクト名.メソッド名([引数 [,...]]);

  */


})();