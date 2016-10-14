1. (DONE) Author administration:
- add support fro administering authors like courses;
- add logic to prevent deleting an author who has a course

2. (DONE) Delete course.

3. (DONE) Hide empty course list once all courses are deleted.

4. (DONE) Unsaved changes message:
- show message to users if they try to leave the ManageCourse page with unsaved changes.

5. (DONE) Client-side validation
- enhance the ManageCourse page client-side validation to validate things like category and length data.

5.1 Make category validation for hh:mm:ss format and not just for any character as it is now.

6. Handle 404's:
- modifications should be done on the ManageCourse page
Hits: add logic to mapStateToProps

7. (DONE) Show # courses in Header:
this will be an example of how Redux's single store model really pays off.
You'll see that adding this is trivial and there is no worry of getting out of sync.

8. Pagination
or infinite scrolling to the tables we are using to support large data sets.

9. (DONE) Sort course table
alphabetically by title by default so that updated course will not necessarily end up in the bottom of the course list
Hint: mapStateToProps is were it should be done

10. Revert abandoned changes:
- consider keeping the old values for course data so you can revert changes when
a user navigates to different page without saving.

Several implementation are available in React and Flux course.
