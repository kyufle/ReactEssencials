function CreateProjectView() {
    return (
        <>
            <div>
                <button>Guardar</button>
                <button>Cancelar</button>
            </div>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" />
            </form>
        </>
    );
}
export default CreateProjectView;