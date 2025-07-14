export default function XgDialog(props: any) {
    return (
    <div className="xg-dialog">
        <dialog open={props.open}>{props.content}</dialog>
    </div>
    )
}