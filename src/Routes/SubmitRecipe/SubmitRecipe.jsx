import { Page, Button } from '../../Components/Page/Page.style'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  SubmitRecipeContainer,
  SubmitRecipeSection,
  SubmitRecipeInput,
  RemoveItemButton,
  AddItemButton,
  ListItemsContainer,
} from './SubmitRecipe.style'
import { Formik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import { useContextRecipe } from '../../Context/recipeContext'
import { useContextModal } from '../../Context/ModalContext'
import Spinner from '../../Components/Spinner/Spinner.component'
import { useContextAuth } from '../../Context/authContext'
import { useAxios } from '../../Hooks/useAxios'
import { RecipeInputSchema } from './recipeValidation'
import { logDOM } from '@testing-library/react'

function fixValues(values) {
  const copy = { ...values }
  copy.tags = copy.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1))
  return copy
}

const initialIngredient = { amount: '', unit: '', material: '' }

const initialValues = {
  name: '',
  photoUrl: '',
  cookingTime: '',
  servings: '',
  public: false,
  instructions: '',
  tags: [''],
  ingredients: [{ ...initialIngredient }],
}

const SubmitRecipe = ({ isEditMode }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { search } = useLocation()
  const { token } = useContextAuth()
  const { get } = useAxios()
  const [loading, setLoading] = useState(false)
  const [fetchedRecipe, setFetchedRecipe] = useState()

  const { saveNewRecipe, updateRecipe } = useContextRecipe()
  const formRef = useRef(null)

  const { showModal } = useContextModal()

  useEffect(() => {
    if (!id || !isEditMode) return
    const query = new URLSearchParams(search)
    const isPublic = query.get('public') === 'true'
    fetchRecipe(id, isPublic)
  }, [id])

  useEffect(() => {
    if (!formRef?.current || !fetchedRecipe) return
    formRef.current.resetForm({
      values: {
        name: fetchedRecipe.name,
        photoUrl: fetchedRecipe.photoUrl,
        cookingTime: fetchedRecipe.cookingTime,
        servings: fetchedRecipe.servings,
        public: fetchedRecipe.public,
        instructions: fetchedRecipe.instructions,
        tags: fetchedRecipe.tags,
        ingredients: fetchedRecipe.ingredients,
      },
    })
  }, [fetchedRecipe])

  const fetchRecipe = async (id, isPublic) => {
    setLoading(true)
    try {
      const response = await get(`/recipe/${isPublic ? '' : 'private/'}${id}`, token)
      setFetchedRecipe(response.data)
    } catch (e) {
      showModal({ title: 'Error', message: 'Could not fetch recipe' })
      console.log(e.response.data.message)
    } finally {
      setLoading(false)
    }
  }

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

  const submitForm = async values => {
    if (!formRef?.current) return

    setLoading(true)
    const fixedValues = fixValues(values)

    try {
      let response
      if (isEditMode) {
        response = await updateRecipe(fixedValues, id)
      } else {
        response = await saveNewRecipe(fixedValues)
      }
      navigate(`/recipe/${response.data.id}?public=${values.public}`)
    } catch (e) {
      console.log('error', e.response.data.message)
      showModal({ title: 'Error', message: 'Could not save recipe' })
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Spinner />

  return (
    <Page>
      <SubmitRecipeContainer>
        <Formik
          initialValues={{ ...initialValues }}
          onSubmit={submitForm}
          innerRef={formRef}
          validationSchema={RecipeInputSchema}
          validateOnChange={true}
        >
          {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isValid }) => (
            <form onSubmit={handleSubmit}>
              <SubmitRecipeSection className="header">
                <h1>{isEditMode ? 'Edit recipe' : 'Submit recipe'}</h1>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="info">
                <SubmitRecipeInput>
                  <label>Recipe Name</label>
                  <input
                    className={touched.name && errors.name ? 'error' : ''}
                    placeholder="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name="name"
                  />
                </SubmitRecipeInput>
                <SubmitRecipeInput>
                  <label>Recipe Photo</label>
                  <input
                    className={touched.photoUrl && errors.photoUrl ? 'error' : ''}
                    placeholder="Photo Url"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.photoUrl}
                    name="photoUrl"
                  />
                </SubmitRecipeInput>
                <h2>Recipe Information</h2>

                <SubmitRecipeInput>
                  <label>Serving</label>
                  <input
                    className={touched.servings && errors.servings ? 'error' : ''}
                    placeholder="0"
                    onBlur={handleBlur}
                    type="number"
                    min="1"
                    onChange={handleChange}
                    name="servings"
                    value={values.servings}
                  />
                  <label>Cooking Time</label>
                  <input
                    className={touched.cookingTime && errors.cookingTime ? 'error' : ''}
                    placeholder="0"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                      className={
                        touched?.ingredients &&
                        touched.ingredients[index]?.material &&
                        errors?.ingredients &&
                        errors.ingredients[index]?.material
                          ? 'error'
                          : ''
                      }
                      placeholder="Material"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name={`ingredients.[${index}].material`}
                      value={values.ingredients[index].material}
                    />
                    <input
                      className={
                        touched?.ingredients &&
                        touched.ingredients[index]?.amount &&
                        errors?.ingredients &&
                        errors.ingredients[index]?.amount
                          ? 'error'
                          : ''
                      }
                      placeholder="Amount"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name={`ingredients.[${index}].amount`}
                      value={values.ingredients[index].amount}
                    />
                    <input
                      className={
                        touched?.ingredients &&
                        touched.ingredients[index]?.unit &&
                        errors?.ingredients &&
                        errors.ingredients[index]?.unit
                          ? 'error'
                          : ''
                      }
                      placeholder="Unit"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    className={touched.instructions && errors.instructions ? 'error' : ''}
                    placeholder="Ex) 1.prepare vegetables"
                    rows="20"
                    onBlur={handleBlur}
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
                      className={touched.tags && errors.tags ? 'error' : ''}
                      placeholder="tag"
                      type="text"
                      onBlur={handleBlur}
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
                    checked={values.public}
                    onChange={handleChange}
                  />
                  <label htmlFor="public">Please Check if you want to save in public</label>
                </SubmitRecipeInput>
              </SubmitRecipeSection>
              <Button
                type="submit"
                disabled={loading || !Object.values(touched).length || !isValid}
              >
                Save
              </Button>
            </form>
          )}
        </Formik>
      </SubmitRecipeContainer>
    </Page>
  )
}

export default SubmitRecipe
