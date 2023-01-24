const promise3 = Promise.reject(new Error('エラー'))
promise3
const promise4 = Promise.reject(new Error('エラー')).catch(()=>console.log('エラーが発生しました。'))

promise4
promise3

const finally_fn = ()=>console.log('最後に実行される処理です。')
const promise5 = Promise.resolve().finally(finally_fn)

promise5
const promise6 = Promise.reject(new Error('エラー')).finally(finally_fn)
function parseJSONAsync(json){
    return new Promise((resolve, reject)=>
        setTimeout(()=>{
            try {
                // 成功
                resolve(JSON.parse(json))
            }catch(err){
               // 失敗
                reject(err)
            }
        }, 1000)
       )
}

const then_fn = a=>console.log(`正常に終了しました。結果は${a}です`)
const catch_fn = ()=>console.log('エラーが発生しました。')
const ex17_1 = parseJSONAsync('{"foo": "pom"}').then(then_fn).finally(finally_fn)

ex17_1
const then_fn2 = a=>console.log(`正常に終了しました。結果は${JSON.stringify(a)}です`)
const ex17_1_2 = parseJSONAsync('{"foo": "pom"}').then(then_fn2).finally(finally_fn)

const ex17_2 = parseJSONAsync('不正なJSON').catch(catch_fn).finally(finally_fn)
