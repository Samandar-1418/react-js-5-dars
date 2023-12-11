import './index.css'
export default function Button(props) {
  let { title, classes} = props;
  classes =+ 'button';
  return (
    <button className={classes}>{title}</button>
  )
}
