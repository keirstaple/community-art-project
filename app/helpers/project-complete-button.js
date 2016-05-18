import Ember from 'ember';

export function projectCompleteButton(params) {
  var project = params[0];

  // if (project.get('complete') === true) {
  //   return Ember.String.htmlSafe('<button class="completedBtn">Project Completed</button>');
  // }

  if (project.get('complete') === true) {
    return Ember.String.htmlSafe('<button class="completedBtn">Project Completed</button>');
  } else if (project.get('complete') === false) {
      return Ember.String.htmlSafe('<button class="uncompletedBtn" ${{action "completedProject" project.id}}>Mark as Completed</button>');
    }
  }

export default Ember.Helper.helper(projectCompleteButton);
