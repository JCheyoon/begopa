import { Page, PageBtn } from '../../Components/Page/Page.style'
import { SubmitRecipeContainer, SubmitRecipeSection, SubmitRecipeInput } from './SubmitRecipe.style'
import { Input } from '../../Components/SignInForm/FormInput/FormInput.style'

const SubmitRecipe = () => {
  const onChangeHandler = () => {
    console.log('change')
  }
  return (
    <Page>
      <SubmitRecipeContainer>
        <form>
          <SubmitRecipeSection className="header">
            <h1>Submit recipe</h1>
          </SubmitRecipeSection>
          <SubmitRecipeSection className="info">
            <SubmitRecipeInput>
              <label>Recipe Name</label>
              <input
                placeholder="name"
                type="text"
                required
                onChange={onChangeHandler}
                name="name"
              />
            </SubmitRecipeInput>
            <SubmitRecipeInput>
              <label>Recipe Photo</label>
              <input
                placeholder="Photo Url"
                type="text"
                required
                onChange={onChangeHandler}
                name="photoUrl"
              />
            </SubmitRecipeInput>
            <h1>Recipe Information</h1>

            <SubmitRecipeInput>
              <label>Serving</label>
              <input
                placeholder="0"
                type="number"
                required
                onChange={onChangeHandler}
                name="serving"
              />
              <label>Cooking Time</label>
              <input
                placeholder="0"
                type="text"
                required
                onChange={onChangeHandler}
                name="cookingTime"
              />
            </SubmitRecipeInput>
          </SubmitRecipeSection>
          <SubmitRecipeSection className="ingredient">
            <SubmitRecipeInput>
              <label>ingredient</label>
              <input
                placeholder="ex)Material"
                type="text"
                required
                onChange={onChangeHandler}
                name="material"
              />
              <input
                placeholder="Amount"
                type="text"
                required
                onChange={onChangeHandler}
                name="amount"
              />
              <input
                placeholder="Unit"
                type="text"
                required
                onChange={onChangeHandler}
                name="unit"
              />
            </SubmitRecipeInput>
          </SubmitRecipeSection>
          <SubmitRecipeSection className="instruction">
            <SubmitRecipeInput>
              <label>instruction</label>
              <input
                placeholder="..."
                type="text"
                required
                onChange={onChangeHandler}
                name="instruction"
              />
            </SubmitRecipeInput>
          </SubmitRecipeSection>
          <SubmitRecipeSection className="tag">
            <SubmitRecipeInput>
              <label>Recipe tags</label>
              <input placeholder="tag" type="text" required onChange={onChangeHandler} name="tag" />
            </SubmitRecipeInput>
          </SubmitRecipeSection>
          <SubmitRecipeSection className="bottom">
            <SubmitRecipeInput>
              <input type="checkbox" required name="private-checkbox" />
              <label>Please Check if you want to save in public</label>
            </SubmitRecipeInput>
          </SubmitRecipeSection>
          <PageBtn>Save</PageBtn>
        </form>
      </SubmitRecipeContainer>
    </Page>
  )
}

export default SubmitRecipe
