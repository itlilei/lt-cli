
let fs = require('fs');
const { async } = require('rxjs');

let basepath = './';


// 判断文件夹/文件是否存在
// let path = ['template1'];
// let basepath = './command/';
let exists = async (paths=[])=> {
    return  await new Promise((resolve) => {
        let result={exist:true,data:[]};
        (async function() {
            for (let path of paths) {
                let bol = fs.existsSync(basepath + path)
                if(!bol){
                    result.exist=false;
                    result.data.push(path)
                }
            }
            resolve(result);
        })();
    });
};

// let r =exists(['utils']).then(res=>console.log(res));

// console.log('r',r)

// 读取模板和生成文件 
// let reads = ['utils/fshander.js'];//要读取的文件

let readFiles = async (paths=[])=> {
    let files = [];
    return await new Promise((resolve) => {
        (async function() {
            for (let path of paths) {
                let text = fs.readFileSync(path).toString();
               
                files.push(text);
            }
            resolve(files);
        })();
        
    });
};

// let f = readFiles(reads);
// console.log('f',f)

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src, dist, callback) {
    fs.access(dist, function(err){
      if(err){
        // 目录不存在时创建目录
        fs.mkdirSync(dist);
      }
      _copy(null, src, dist);
    });
  
    function _copy(err, src, dist) {
      if(err){
        callback(err);
      } else {
        fs.readdir(src, function(err, paths) {
          if(err){
            callback(err)
          } else {
            paths.forEach(function(path) {
              var _src = src + '/' +path;
              var _dist = dist + '/' +path;
              fs.stat(_src, function(err, stat) {
                if(err){
                  callback(err);
                } else {
                  // 判断是文件还是目录
                  if(stat.isFile()) {
                    fs.writeFileSync(_dist, fs.readFileSync(_src));
                  } else if(stat.isDirectory()) {
                    // 当是目录是，递归复制
                    copyDir(_src, _dist, callback)
                  }
                }
              })
            })
          }
        })
      }
    }
  }

module.exports={
    exists,
    readFiles,
    copyDir
}
