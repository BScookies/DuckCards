import React from 'react';
import { partial } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField, MenuItem, Dialog, DropDownMenu } from 'material-ui';
import { changeStatus, changeField, setVisibility } from '../actions/taskModal';
import { createTask } from '../actions';

const styles = {
  width: '40%',
  maxWidth: 'none'
};

const CreateTaskModal = ({
  taskModal,
  actions,
  changeStatus,
  changeField,
  setVisibility,
  createTask
}) => (
  <Dialog
    title="New Task"
    actions={actions}
    modal={false}
    open={taskModal.open}
    onRequestClose={() => setVisibility(false)}
    contentStyle={styles}
  >
    <form id="myForm" className='form' onSubmit={() => createTask(taskModal)}>
      <TextField
        value={taskModal.title}
        onChange={partial(changeField, 'title')}
        hintText="Task name"
      /><br />
      <TextField
        value={taskModal.dueDate}
        onChange={partial(changeField, 'dueDate')}
        hintText="Due date"
      /><br />
      <TextField
        value={taskModal.category}
        onChange={partial(changeField, 'category')}
        hintText="Category"/>
      <br />
      <TextField
        value={taskModal.owner}
        onChange={partial(changeField, 'owner')}
        hintText="Owner"
      />
      <div>
        <DropDownMenu
          value={taskModal.dropdownValue}
          onChange={(e, k, value) => changeStatus(value)}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="To Do" />
          <MenuItem value={2} primaryText="In Progress" />
          <MenuItem value={3} primaryText="Completed" />
        </DropDownMenu>
      </div>
    </form>
  </Dialog>
);

const mapStateToProps = ({ taskModal }) => ({ taskModal });

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    changeField,
    changeStatus,
    setVisibility,
    createTask
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskModal)
