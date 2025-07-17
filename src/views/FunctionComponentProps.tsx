
export default function FunctionComponentProps(props: any) {
    // 使用props来获取传递的属性
    console.log('FunctionComponentProps props:', props);
    
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}