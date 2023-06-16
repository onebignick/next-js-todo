import Todo from './components/todoItem/todo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
          Hello World! This is my todo list.
      </div>
      <div>
        <Todo header="hello" description="Lorem Ipsum Dolor" dueDate="23/4"/>
      </div>
    </main>
  )
}
