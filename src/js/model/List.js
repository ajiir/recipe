import uniqid from "@mdenic/uniqid";

export default class List {
  constructor() {
    this.items = [];
  }

  deleteItem(id) {
    //   id гэдэг ID-тэй орцын индексыг массиваас хайж олно
    const index = this.items.findIndex((el) => el.id === id);

    // Уг индекс дээрхи элементийг массиваас устгана
    this.items.splice(index, 1);
  }

  addItem(item) {
    let newItem = {
      id: uniqid(),
      item: item,
    };
    this.items.push(newItem);

    return newItem;
  }
}
