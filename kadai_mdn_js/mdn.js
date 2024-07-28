// 日付を宣言
const date = new Date(); 
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();


const formattedDate = year + '年' + month + '月' + day + '日';
console.log(formattedDate);
