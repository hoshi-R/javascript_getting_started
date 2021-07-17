(() => {

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

})();