1. Author administration:
- add support fro administering authors like courses;
- add logic to prevent deleting an author who has a course

2. Delete course.

3. Hide empty course list once all courses are deleted.

4. Unsaved changes message:
- show message to users if they try to leave the ManageCourse page with unsaved changes.

5. Client-side validation
- enhance the ManageCourse page client-side validation to validate things like category and length data.

6. Handle 404's:
- modifications should be done on the ManageCourse page
Hits: add logic to mapStateToProps

7. Show # courses in Header:
this will be an example of how Redux's single store model really pays off.
You'll see that adding this is trivial and there is no worry of getting out of sync.

8. Pagination
or infinite scrolling to the tables we are using to support large data sets.

9. Sort course table
alphabetically by title by default so that updated course will not necessarily end up in the bottom of the course list
Hint: mapStateToProps is were it should be done

10. Revert abandoned changes:
- consider keeping the old values for course data so you can revert changes when
a user navigates to different page without saving.

Several implementation are available in React and Flux course.
