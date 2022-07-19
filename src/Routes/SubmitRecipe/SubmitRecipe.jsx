import { Page, PageBtn } from '../../Components/Page/Page.style'
import {
  SubmitRecipeContainer,
  SubmitRecipeSection,
  SubmitRecipeInput,
  RemoveItemButton,
  AddItemButton,
  ListItemsContainer,
} from './SubmitRecipe.style'
import { Formik } from 'formik'
import { useRef } from 'react'

const initialIngredient = { amount: 0, unit: '', material: '' }

const initialValues = {
  name: '',
  photoUrl: '',
  cookingTime: '',
  servings: 0,
  public: false,
  instructions: '',
  tags: [''],
  ingredients: [{ ...initialIngredient }],
}

const SubmitRecipe = () => {
  const formRef = useRef(null)

  const removeIngredientHandler = index => {
    if (!formRef?.current) return
    const { values, setFieldValue } = formRef.current
    const newIngredients = [...values.ingredients]
    newIngredients.splice(index, 1)
    setFieldValue('ingredients', newIngredients)
  }
  const addIngredientHandler = () => {
    if (!formRef?.current) return
    const { values, setFieldValue } = formRef.current
    const newIngredients = [...values.ingredients, { ...initialIngredient }]
    setFieldValue('ingredients', newIngredients)
  }

  const addTagHandler = () => {
    if (!formRef?.current) return
    const { values, setFieldValue } = formRef.current
    const newTags = [...values.tags, '']
    setFieldValue('tags', newTags)
  }

  const removeTagHandler = index => {
    if (!formRef?.current) return
    const { values, setFieldValue } = formRef.current
    const newTags = [...values.tags]
    newTags.splice(index, 1)
    setFieldValue('tags', newTags)
  }

  const submitForm = values => {
    console.log('submitting', values)

    // if (!formRef?.current) return
    // const { resetForm } = formRef.current
    // resetForm()
  }

  return (
    <Page>
      <SubmitRecipeContainer>
        <Formik initialValues={{ ...initialValues }} onSubmit={submitForm} innerRef={formRef}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <SubmitRecipeSection className="header">
                <h1>Submit recipe</h1>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="info">
                <SubmitRecipeInput>
                  <label>Recipe Name</label>
                  <input
                    placeholder="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                  />
                </SubmitRecipeInput>
                <SubmitRecipeInput>
                  <label>Recipe Photo</label>
                  <input
                    placeholder="Photo Url"
                    type="text"
                    onChange={handleChange}
                    value={values.photoUrl}
                    name="photoUrl"
                  />
                </SubmitRecipeInput>
                <h2>Recipe Information</h2>

                <SubmitRecipeInput>
                  <label>Serving</label>
                  <input
                    placeholder="0"
                    type="number"
                    onChange={handleChange}
                    name="servings"
                    value={values.servings}
                  />
                  <label>Cooking Time</label>
                  <input
                    placeholder="0"
                    type="text"
                    onChange={handleChange}
                    value={values.cookingTime}
                    name="cookingTime"
                  />
                </SubmitRecipeInput>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="ingredients">
                <label>ingredients</label>
                {values.ingredients.map((ingredient, index) => (
                  <ListItemsContainer key={index}>
                    <input
                      placeholder="Material"
                      type="text"
                      onChange={handleChange}
                      name={`ingredients.[${index}].material`}
                      value={values.ingredients[index].material}
                    />
                    <input
                      placeholder="Amount"
                      type="number"
                      onChange={handleChange}
                      name={`ingredients.[${index}].amount`}
                      value={values.ingredients[index].amount}
                    />
                    <input
                      placeholder="Unit"
                      type="text"
                      onChange={handleChange}
                      name={`ingredients.[${index}].unit`}
                      value={values.ingredients[index].unit}
                    />
                    {values.ingredients.length === 1 && index === 0 ? null : (
                      <RemoveItemButton
                        onClick={() => removeIngredientHandler(index)}
                        type="button"
                      >
                        <span className="material-symbols-outlined">close</span>
                      </RemoveItemButton>
                    )}
                  </ListItemsContainer>
                ))}
                <AddItemButton onClick={addIngredientHandler} type="button">
                  <span className="material-symbols-outlined">add</span>
                  <span>Add</span>
                </AddItemButton>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="instruction">
                <SubmitRecipeInput className="instruction">
                  <label>instruction</label>
                  <textarea
                    placeholder="Ex) 1.prepare vegetables"
                    rows="20"
                    onChange={handleChange}
                    name="instructions"
                    value={values.instructions}
                  />
                </SubmitRecipeInput>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="tag">
                <label>Recipe tags</label>
                {values.tags.map((tag, index) => (
                  <ListItemsContainer key={index}>
                    <input
                      placeholder="tag"
                      type="text"
                      onChange={handleChange}
                      name={`tags.[${index}]`}
                      value={values.tags[index]}
                    />
                    {values.tags.length === 1 && index === 0 ? null : (
                      <RemoveItemButton onClick={() => removeTagHandler(index)} type="button">
                        <span className="material-symbols-outlined">close</span>
                      </RemoveItemButton>
                    )}
                  </ListItemsContainer>
                ))}
                <AddItemButton onClick={addTagHandler} type="button">
                  <span className="material-symbols-outlined">add</span>
                  <span>Add</span>
                </AddItemButton>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="bottom">
                <SubmitRecipeInput className="checkBox">
                  <input
                    type="checkbox"
                    name="public"
                    id="public"
                    value={values.public}
                    onChange={handleChange}
                  />
                  <label htmlFor="public">Please Check if you want to save in public</label>
                </SubmitRecipeInput>
              </SubmitRecipeSection>
              <PageBtn type="submit">Save</PageBtn>
            </form>
          )}
        </Formik>
      </SubmitRecipeContainer>
    </Page>
  )
}

export default SubmitRecipe
