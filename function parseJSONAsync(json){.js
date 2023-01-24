function parseJSONAsync(json){
	return new Promise((resolve, reject)=>
		setTimeout(()=>{
			try {
				// 成功
				resolve(JSON.parse(json))
			}catch(err){
				reject(err)
			}
		}, 1000)
	)
}

const then_fn2 = a=>console.log(`正常に終了しました。結果は${JSON.stringify(a)}です`)
undefined

const catch_fn = ()=>console.log('エラーが発生しました。')
undefined

const finally_fn = ()=>console.log('最後の処理です。')
Uncaught SyntaxError: Identifier 'finally_fn' has already been declared

const ex17_1 = parseJSONAsync('{"foo": "pom"}').then(then_fn).finally(finally_fn)
u
const ex17_1 = parseJSONAsync('{"foo": "pom"}').then(then_fn).finally(finally_fn)
const ex17_2 = parseJSONAsync('不正なJSON').catch(catch_fn).finally(finally_fn)
