
const Container = (props) => {
    const { className = '' } = props
    return (
        <section className={`${className} pe-3 ps-3 pe-md-5 ps-md-5`}>{props.children}</section>
    )
}

export default Container;