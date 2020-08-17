/**
 * Workaound for https://github.com/facebook/create-react-app/issues/5372
 *
 * When `mini-css-extract-plugin` cannot fulfill the desired order of chunks, which would impact
 * the outputed CSS specificity, it emits some warnings. Those warnings break our build pipeline.
 *
 * Not fulfilling the desired order of chunks is not a problem for us, as we are using CSS Modules.
 *
 * To solve this problem, it would be necessary to track which SCSS imports are causing this,
 * and reorder them (I actually found them). But it would be a fragile solution, as an accidental
 * reorder would break the build again.
 *
 * As a workaround, we will help `mini-css-extract-plugin` by bringing to the main entrypoint the files
 * it is unable to properly order, ensuring they will be ordered.
 *
 * ATTENTION: This comes at a cost, as we are increasing the size of the entrypoint.
 *            Do NOT add files here indiscriminately.
 */
import 'components/shared/FavoriteButton/FavoriteButton.module.scss';
import 'components/shared/SearchField/SearchField.module.scss';
