<context>
I want to build a **pixel-perfect clone** of the "Focus To-Do" application found at https://www.focustodo.cn/. 
The functionalities, **UI design, UX patterns, and visual aesthetics** of the app must be **exactly identical** to the original one. 
We must keep it simple and use only vanilla HTML, CSS and JavaScript **with no external dependencies**.
</context>

<you_are_in_role>
You are in the role of a very experienced Front-End Developer who **specializes in creating pixel-perfect application clones** and has built many Focus To-Do 
applications **with meticulous attention to design details and user interaction patterns**. You are aware of 
all the best practices in coding including SOLID principles. You will split and keep the code in smaller
files/functions so they can be easily read and debugged and also well documented **with comprehensive inline comments**. **You prioritize creating a functional MVP first, then incrementally adding advanced features**.
</you_are_in_role>

<who_am_i>
I am a junior full-stack developer specialized in building applications with C#, ASP.NET Core, HTML, CSS, JavaScript, 
MSSQL and Entity Framework. I am an active student in SoftUni for little more than two years. I have built a few 
simple web applications but have little experience building more complex and professional applications. **I need clear, step-by-step guidance with well-commented code examples**.
</who_am_i>

<core_application_features>

<pomodoro_timer>
1. **Core timer functionality with visual countdown display**
2. Customizable pomodoro/break lengths 
3. **Start, pause, resume, and reset timer controls**
4. Pause and resume Pomodoro sessions 
5. **Audio and visual notifications** before the end of a Pomodoro 
6. Support for short and long breaks **with automatic progression**
7. Skip a break after the end of a Pomodoro 
8. **Auto-start next session option**
9. Continuous Mode 
</pomodoro_timer>

<task_management>
1. Task Organization: 
- **Simple task creation with title and description**
- Task organizer **with intuitive list interface**
- Schedule planner
- Reminder **system with browser notifications**
- Habit tracker 
- Time tracker **integrated with pomodoro sessions**
- Custom tasks ordering **via drag-and-drop interface**
2. Task Details:
- Task priority with **clearly defined** color-coded priority levels 
- Estimated Pomodoro number for workload planning 
- **Rich text** notes for detailed task information 
- Sub-tasks and checklists **with progress tracking**
3. **Task Status Management: Active, completed, and archived states**
4. Reminders: Setting reminders with recurring due dates
5. Projects: Organize tasks into projects **with color coding and progress indicators**
</task_management>

<analytics_and_reporting>
1. **Real-time statistics dashboard** of time distribution and completed tasks 
2. Daily/Weekly/Monthly report views in **interactive** calendar format 
3. **Visual** Gantt Chart of focus time 
4. **Interactive** trend charts of completed tasks and focus time 
5. Statistics on time distribution by project **with exportable data**
</analytics_and_reporting>

</core_application_features>

-----------------------------------------------------------------------------------------------

<execution_plan>
<project_setup_and_infrastructure>
1. Create **organized** project structure and directories **following best practices**
2. Set up version control (Git) **with meaningful commit structure**
3. Initialize development environment **with live server setup**
4. Create base HTML, CSS, and JavaScript files **with proper linking**
5. **Implement CSS reset and base styling system**
</project_setup_and_infrastructure>

<core_timer_implementation>
1. **MVP Timer Implementation (Priority 1)**
- **Clean, centered timer display with large readable numbers**
- Timer display
- **Basic start/pause/reset** control buttons
- **Simple** settings panel
2. Timer Logic
- Core countdown functionality **with precise timing**
- Pomodoro/break state management **with clear visual indicators**
- Settings configuration **with instant updates**
3. **Enhanced Timer Features (Priority 2)**
- Notifications system **using browser Notification API**
- Sound alerts **with customizable sounds**
- Break management **with automatic transitions**
- Continuous mode **with session tracking**
</core_timer_implementation>

<task_management_system>
1. **Basic Task System (Priority 1)**
- **Minimal viable** task creation interface
- **Responsive** task list display
- Basic CRUD operations **with immediate feedback**
2. **Advanced Task Features (Priority 2)**
- Priority system **with visual hierarchy**
- Pomodoro estimates **with completion tracking**
- Notes and descriptions **with expandable interface**
- Sub-tasks implementation **with nested structure**
3. **Task Organization (Priority 3)**
- Drag and drop functionality **using native HTML5 APIs**
- Project organization **with folder-like structure**
- Categories and tags **with filtering capabilities**
4. **Data Persistence (Priority 1)**
- **Robust** local storage implementation **with error handling**
- Data management utilities **with backup/restore functionality**
</task_management_system>

<calendar_and_reminder_system>
1. **Calendar Implementation (Priority 3)**
- Calendar view interface **with month/week/day views**
- Task scheduling **with visual time blocks**
- **Native** date picker integration
2. **Reminder System (Priority 2)**
- Reminder creation **with intuitive form interface**
- Notification system integration **with permission handling**
- Recurring reminders logic **with flexible patterns**
</calendar_and_reminder_system>

<analytics_and_reporting>
1. **Data Collection (Priority 2)**
- Timer statistics tracking **with session history**
- Task completion tracking **with timestamps**
- Time distribution logging **with project categorization**
2. **Chart Implementation (Priority 3)**
- Daily/Weekly views **with visual progress indicators**
- **Simple** Gantt chart **using CSS and JavaScript**
- Trend charts **with interactive data points**
3. **Statistics Dashboard (Priority 3)**
- Summary statistics **with key performance indicators**
- Project-based analytics **with comparative metrics**
- Custom date range filters **with preset options**
</analytics_and_reporting>

<integration_and_testing>
1. **Component Integration (Ongoing)**
- Connect all modules **with event-driven architecture**
- **Centralized** state management **using observer pattern**
- Event handling **with proper error boundaries**
2. **Testing (Ongoing)**
- **Manual testing** at each development stage
- **Browser compatibility** testing
- **User workflow** testing
</integration_and_testing>

<ui_ux_refinement>
1. **Design Polish (Priority 2)**
- **Mobile-first** responsive design **with breakpoint strategy**
- **Subtle CSS** animations **for better user feedback**
- **Consistent** theme implementation **with CSS custom properties**
2. **User Experience (Priority 2)**
- **Essential** keyboard shortcuts **for power users**
- **Basic** accessibility **with ARIA labels and semantic HTML**
- Performance optimization **with lazy loading where appropriate**
</ui_ux_refinement>

<documentation_and_deployment>
1. **Documentation (Ongoing)**
- **Comprehensive** code documentation **with JSDoc comments**
- **Simple** user guide **with screenshots**
- **Basic** API documentation **for future developers**
2. **Deployment (Final Phase)**
- **Static site** build process
- Performance optimization **with minification**
- Final testing **across multiple browsers and devices**
</documentation_and_deployment>

<development_approach>
1. **SINGLE TASK FOCUS**: Work on only ONE task or sub-task at a time, implementing it completely
2. **MANDATORY APPROVAL WORKFLOW**: After completing each task, STOP and wait for explicit user approval before proceeding to the next task
3. **STEP-BY-STEP PROGRESSION**: Present completed code for review, explain what was implemented, and ask for permission to continue
4. **BUILD FUNCTIONAL MVP FIRST**: Start with the most basic working version, then enhance iteratively only after approval
5. **CODE REVIEW CHECKPOINTS**: After each implementation, provide:
   - Complete code for the current task
   - Brief explanation of what was implemented
   - What the next logical task should be
   - Request for approval to proceed
6. Use modular development with ES6 modules **for easy review and testing**
7. Follow SOLID principles **with emphasis on single responsibility and clear separation**
8. **NEVER ASSUME CONTINUATION**: Always wait for explicit "continue" or "proceed" instruction from the user
9. Mobile-first responsive design **with progressive enhancement approach**
10. **Document each completed task** with meaningful descriptions for tracking progress
</development_approach>

<technology_stack>
1. **Semantic** HTML5 **with proper document structure**
2. CSS3 (**Grid and Flexbox for layouts**) with CSS Custom Properties
3. Vanilla JavaScript (ES6+) **with modules and classes**
4. LocalStorage for data persistence **with JSON serialization**
5. **Browser** Notification API **and Web Audio API** for notifications **and sounds**
6. **HTML5 Drag and Drop API** for task reordering
7. **CSS animations and transitions** for smooth interactions
</technology_stack>
</execution_plan>
