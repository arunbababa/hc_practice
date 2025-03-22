// 順番 pythonの時と同じようにやる 思考の流れや時になった点のコメントも残していますm(__)m

// 今日の日付を取得し、月と年を出力する
// 月の最初の日の曜日を取得
// 月の最終日を取得
// 月のカレンダーを表示
// 整形部分は調べるor最終gpt

// 必要変数
const args = process.argv.slice(2); // これで -m と そのあとに続く数字のみ取れる
const today = new Date();           // 今日の日付
const year = today.getFullYear();   // 今年
let month = today.getMonth() + 1; // 今月

// -m オプションの処理を先にする inputMonthは1~12の数字ではない場合か文字の場合はじく処理を追加
if (args.length === 1){
    console.error("エラー: 2つの引数を指定してください。");
    return;
}

if (args.length === 2) {
    if (args[0] !== "-m") {
        console.error("エラー: -m オプションを指定してください。-mオプション以外は無効です");
        return;
    }
    const inputMonth = Number(args[1]);
    if (isNaN(inputMonth) || inputMonth < 1 || inputMonth > 12) {
        console.error("エラー: 月は1〜12の数字で指定してください");
        return;
    }
    month = inputMonth;
}

const lastDate = new Date(year, month, 0).getDate(); // 月末日を数字で取得
let firstDay = new Date(year, month - 1, 1).getDay(); // 0〜6のどれか (日〜土)
const weekDays = ["月", "火", "水", "木", "金", "土", "日"];
firstDay = firstDay === 0 ? 6 : firstDay - 1; // 月曜=0, ..., 日曜=6 に変更

// 見出し
console.log(`     ${month}月 ${year}`);
console.log(weekDays.join(" "));

// 空白（最初の週の前に余白）
let calendar = "   ".repeat(firstDay);

for (let date = 1; date <= lastDate; date++) {
    calendar += String(date).padStart(2, " ") + " ";

    // 改行の条件（月曜始まり）
    if ((firstDay + date) % 7 === 0) {
        calendar += "\n";
    }
}

console.log(calendar);