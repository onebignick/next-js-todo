

const Todo = ({header, description, dueDate} : {header: string, description: string, dueDate: string}) => {
    return(
        <article>
            <section className="flex justify-around">
                <h1>{header}</h1>
                <h1>{dueDate}</h1>
            </section>
            <section>{description}</section>
        </article>
    );
}

export default Todo;