export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('about', 'completed-projects', 'contact', 'project'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('completed-projects', 'contact', 'project'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('contact'),
    this.toRoute('index', 'about', 'completed-projects'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('completed-projects'),
    this.toRoute('index', 'about', 'contact'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('project', {path: '/project-detail/:project_id'}),
    this.toRoute('index', 'about', 'completed-projects', 'contact'),
    this.use('fade'),
    this.reverse('fade')
  );
}
