import './App.css'

function App() {
  const personArr = [{ name: '小高',class:'border' },{ name: '哈哈',class:'' },{ name: '嘿嘿',class:'border' }]
  // const fn = (num: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   console.log('fn点击', num, e)
  // }
  const flag:boolean = true
  const fn=<T,>(params:T)=>{
    console.log('fn点击',params)
  }
  return (
    <>
      {
        flag?personArr.map((item, index) => {
          return <div key={index} className={item.class} onClick={()=>fn(item)}>{item.name}</div>
        }):null
      }
    </>
  )
}

export default App
