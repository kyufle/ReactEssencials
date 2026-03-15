import { useRef } from "react";

function CreateProjectView({onCancelProject, onAddProject}) {
    const formRef = useRef();
    const saveProjectHandle = ()=>{
        const saveInfo = new FormData(formRef.current);
        onAddProject({
            id: Date.now(),
            title: saveInfo.get('title'),
            description: saveInfo.get('description'),
            dueDate: saveInfo.get('dueDate'),
        })
    }
    return (
        <div>
            <button onClick={saveProjectHandle}>Save</button>
            <button onClick={onCancelProject}>Cancel</button>
            <form ref={formRef}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>
                <label htmlFor="dueDate">Date</label>
                <input type="date" name="dueDate" id="dueDate" />
            </form>
        </div>
    );
}
export default CreateProjectView;