import { Component } from "@angular/core";

@Component({
  selector: "multi-select",
  templateUrl: "./multi-select-box.html",
  styleUrls: ["./multi-select-box.css"]
})
export class MultiSelectBoxComponent {
  selectedFields = [];
  allFields = [
    "mango",
    "banana",
    "apple",
    "gavava",
    "lichhi",
    "papaya",
    "lemon",
    "orange"
  ];
  allFieldsObj = [
    { data: "mango", selected: false },
    { data: "banana", selected: false },
    { data: "apple", selected: false },
    { data: "gavava", selected: false },
    { data: "lichhi", selected: false },
    { data: "papaya", selected: false },
    { data: "lemon", selected: false },
    { data: "orange", selected: false }
  ];
  showSelection = false;
  showSelectionObj = false;

  serchInputField = "";
  allFieldsObj1 = [
    { data: "mango", selected: false },
    { data: "banana", selected: false },
    { data: "apple", selected: false },
    { data: "gavava", selected: false },
    { data: "lichhi", selected: false },
    { data: "papaya", selected: false },
    { data: "lemon", selected: false },
    { data: "orange", selected: false }
  ];
  SerchedFilteredList = [];
  selectedSerchList = [];

  toggleSelectionBox = () => {
    this.showSelection = !this.showSelection;
  };

  selectField = (i) => {
    this.selectedFields.push(this.allFields[i]);
    this.allFields.splice(i, 1);
  };

  unselectData = (e, i) => {
    e.stopPropagation();
    this.allFields.push(this.selectedFields[i]);
    this.selectedFields.splice(i, 1);
  };

  toggleSelectionBoxObj = () => {
    this.showSelectionObj = !this.showSelectionObj;
  };

  selectFieldObj = (i) => {
    this.allFieldsObj.map((data, index) => {
      if (index === i) {
        data["selected"] = true;
      }
      return data;
    });
  };

  unselectDataObj = (e, i) => {
    e.stopPropagation();
    this.allFieldsObj.map((data, index) => {
      if (index === i) {
        data["selected"] = !data["selected"];
      }
      return data;
    });
  };

  getSearchList = () => {
    console.log(this.serchInputField);
    if (!this.serchInputField) {
      this.SerchedFilteredList = [];
    }
    if (this.serchInputField.length < 2) {
      return;
    }
    this.SerchedFilteredList = this.allFieldsObj1.filter((obj) => {
      return obj["data"].indexOf(this.serchInputField) >= 0;
    });
    console.log(this.allFieldsObj1);
  };

  selectFieldObj1 = (selectedItem) => {
    this.SerchedFilteredList.map((data, index) => {
      if (selectedItem["data"] === data["data"]) {
        data["selected"] = true;
        this.selectedSerchList.push(data);
      }
      return data;
    });
  };

  unselectDataObj1 = (e, item) => {
    e.stopPropagation();
    this.allFieldsObj1.map((data, index) => {
      if (item["data"] === data["data"]) {
        data["selected"] = !data["selected"];
      }
      return data;
    });
    this.selectedSerchList = this.selectedSerchList.filter((data) => {
      if (item["data"] !== data["data"]) {
        return data;
      }
    });
  };
}
