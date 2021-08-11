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



  //Chapter4

  /* 
  関数名をつける際の注意点
  ・(単なる文字列ではなく)識別子の条件を満たす必要がある
  ・「その関数がどのような処理を担っているのか」がすぐわかるような名前を付ける
  　→「showMessage」のように「動詞+名詞」の型式で命名するのが一般的（camelCase記法）
  */

  //function命令で定義
  function getTriangle(base, height) {
    return base * height / 2;
  }
  console.log(getTriangle(5, 2));

  //関数リテラル表現で定義
  let getTriangleThree = function(base, height) {
    return base * height / 2;
  };
  console.log("sankaku" + getTriangleThree(10, 20));

  let getTriangleTwo = (base, height) => base * height / 2;
  console.log("三角形の面積：" + getTriangleTwo(50, 20));



  //Chapter5

  class Member {
    //コンストラクターの定義
    constructor(firstName, lastName) {
    //プロパティの定義
      this.firstName = firstName;
      this.lastName = lastName;
    }

    //メソッドの定義
    getName() {
      return this.lastName + this.firstName;
    }
  }

  let m = new Member("太郎", "山田");
  console.log(m.getName());



  //Chapter6
  let current = new Date();
  let result = document.getElementById("result");
  result.textContent = current.toLocaleString();

  let nam = document.getElementsByName("time");
  nam[0].value = current.toLocaleTimeString();

  document.getElementById("btn").addEventListener("click", () => {
    let result = [];
    let numbers = document.getElementsByName("number");

    for(let i = 0, len = numbers.length; i < len; i++) {
      let number = numbers.item(i);
      if (number.checked) {
        result.push(number.value);
      } else {
        console.log(number.value);
      }
    }
    window.alert(result.toString());
  });

  let elem = document.getElementById('elem');

  elem.addEventListener("mouseover", function() {
    this.className = "highlight";
  }, false);

  elem.addEventListener("mouseout", function() {
    this.className = "";
  }, false);

  elem.addEventListener("mouseover", function() {
    this.style.color = "red";
  }, false);

  elem.addEventListener("mouseout", function() {
    this.style.color = "#333";
  }, false);



  //Chapter7

  let count = 0;
  let result_1 = document.getElementById('result_1');
  document.getElementById('btn_1').addEventListener('clicl', () => {
    result_1.textContent = ++count;
    history.pushState(count, null, '/js/chap07/count/' + count);
  });

  window.addEventListener('popstate', (e) => {
    count = e.state;
    result_1.textContent = count;
  });

})();
