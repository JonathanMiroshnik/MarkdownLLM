import React from 'react';
import TreeSelect from 'rc-tree-select';

type Option = {
    value: string;
    label: string;
}

const options: Option[] = [
  { value: '0', label: 'root' },
  { value: '1', label: 'Child 1' },
  { value: '2', label: 'Child 2' },
  { value: '3', label: 'Child 3' }
];

const onChange = (value: string, option: Option) => console.log('onChange', value, 
    option);
    

function FileSelection() {
    return (
        <TreeSelect
            dropdownStyle={{ maxHeight: 400, overflowY: 'auto', padding: 20, border: "10px", borderColor: "red", borderStyle: "dashed" }}
            treeData={options}
            placeholder="Please select an item"
            treeIcon={true}
            multiple={true}
            treeLine={true}
            // onChange={onChange}
        />
    );
}

export default FileSelection;