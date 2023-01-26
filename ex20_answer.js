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

// async/await構文を使用した非同期処理
async function tryAsync(json){
	try{
  	     const result = await parseJSONAsync(json)
  	     console.log('パース結果', JSON.stringify(result))
  	}catch(err){
  	     console.log('エラーをキャッチ', err)
  	}
}


tryAsync('{"foo": 1}')

tryAsync('不正なJSON')

const result2 = await parseJSONAsync('{"pom": 3}')
result2
await parseJSONAsync('{"pom": 3}')
result2.pom
const result = await parseJSONAsync('{"pom": 3}')
result.pom
async function testAsync(param){
async function testAsync(param1, param2){
return param1 + param2
}

testAsync(1,2)
await testAsync(1,2)
