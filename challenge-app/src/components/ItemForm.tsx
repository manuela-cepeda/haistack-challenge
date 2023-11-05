const ItemForm = (): JSX.Element => {
	return (
		<form>
			<label htmlFor=''>Item name</label>
			<input type='text' id='' />
			<label htmlFor=''>Item description</label>
			<input type='text' />
			<button>Add</button>
		</form>
	);
};

export default ItemForm;
