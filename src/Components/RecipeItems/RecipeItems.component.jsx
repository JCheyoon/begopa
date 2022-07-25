import {
  CookingTime,
  DescriptionContainer,
  Ingredient,
  InstructionsContainer,
  MainSection,
  Photo,
  RecipeItemCategoriesContainer,
  RecipeItemsContainer,
  RecipeItemsSection,
  RelatedRecipe,
  RelatedRecipeContainer,
  RelateRecipePic,
  ServingInput,
  Time,
} from './RecipeItems.style'

const RecipeItems = () => {
  return (
    <RecipeItemsContainer>
      <RecipeItemsSection>
        <MainSection>
          <CookingTime>
            <Time>
              <span className="material-symbols-outlined">timer</span>
              <span>Cooking Time</span>
            </Time>
            <h2>Update at </h2>
          </CookingTime>
          <Photo />
          <InstructionsContainer>
            <h1>Ingredients</h1>
            <span>Adjust Servings</span>
            <ServingInput></ServingInput>
            <Ingredient>
              <span>amount</span>
              <span>unit</span>
              <span>material</span>
            </Ingredient>
            <Ingredient>
              <span>amount</span>
              <span>unit</span>
              <span>material</span>
            </Ingredient>
            <Ingredient>
              <span>amount</span>
              <span>unit</span>
              <span>material</span>
            </Ingredient>
            <Ingredient>
              <span>amount</span>
              <span>unit</span>
              <span>material</span>
            </Ingredient>
            <DescriptionContainer>
              <h1>Directions</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolorum
                laborum odit quibusdam velit. Aliquid amet aut ducimus ea libero maxime mollitia non
                sequi. Architecto commodi dolore dolorem doloremque in neque similique ullam
                voluptate. At deleniti dicta dolore ducimus, ipsum laborum nobis quae quam quia rem
                repudiandae sed sit ullam? A ab accusamus accusantium aliquid dolores et excepturi
                impedit molestiae, nam nihil, rem repellat temporibus. Consequuntur doloribus, quo.
                Dicta itaque magni modi qui reprehenderit veniam, voluptates. Animi assumenda
                corporis earum enim exercitationem, laudantium porro quo reiciendis sit ullam, unde
                voluptatem. Accusantium alias asperiores aspernatur commodi consequatur culpa earum
                et fuga ipsam libero magnam modi molestiae nobis non officiis praesentium quam quod,
                sequi ullam voluptates. Commodi ex molestias odio perspiciatis praesentium ratione
                reprehenderit soluta tenetur voluptate. Est iure laborum nisi! Consequatur dolorem
                est exercitationem expedita itaque nobis nulla porro sit ullam! Autem dignissimos
                ducimus enim id odio optio pariatur qui rem saepe voluptatem. Adipisci debitis error
                in ipsa ipsum quidem quo ratione temporibus veniam. Consectetur debitis ea eligendi
                error labore laudantium nemo rerum sunt? A earum eos error id itaque labore laborum
                nemo quia. A aliquam autem enim eveniet hic inventore modi nemo nulla odio, optio
                perspiciatis quas recusandae totam ut veritatis. Ad aliquid distinctio ducimus ea
                excepturi expedita incidunt quia? Accusantium corporis deleniti, pariatur quasi
                quidem quos reprehenderit? Aspernatur cupiditate eum, exercitationem iste labore
                libero praesentium! Fugiat nulla, saepe. Adipisci alias aliquam animi atque aut
                commodi corporis cumque cupiditate debitis dolore dolorem ducimus ea eaque error
                exercitationem fugit, harum in inventore libero molestias mollitia natus neque non
                nostrum, odio, optio quaerat qui quidem repudiandae sint sit tempore unde vitae.
                Amet assumenda delectus dolores fugiat ipsam perferendis repudiandae, voluptates
                voluptatum! Consequatur debitis et hic vel. Aliquam amet at autem corporis
                cupiditate delectus deserunt dolore dolores doloribus eius ex excepturi incidunt
                minima minus molestias natus, neque nesciunt, nobis odit quasi quod reiciendis
                repellendus vel? Ab aperiam at blanditiis consectetur cum cupiditate, dicta dolorum
                ducimus ea eius facere incidunt ipsa, laudantium maxime minima mollitia neque non
                odio quia quibusdam quisquam quos repellendus sit suscipit tenetur totam vitae
                voluptatibus. Adipisci aliquam architecto corporis deserunt dolore dolorem
                doloremque doloribus ea eaque error fugiat harum illo illum ipsum iste laborum
                mollitia nulla obcaecati perspiciatis possimus quae quaerat quasi quisquam quo saepe
                sequi similique tempore, tenetur totam ullam veniam vero voluptas voluptate. A
                assumenda atque cumque distinctio hic illum nostrum provident quae. Assumenda cumque
                cupiditate deleniti dolor, enim excepturi explicabo fugiat hic id ipsum labore
                laborum magni maiores molestiae nihil nostrum numquam perspiciatis qui ratione
                repudiandae soluta tempore voluptates! Corporis labore velit vitae! Architecto, eius
                esse illum in minima, nam neque odio officia quidem quis repudiandae sed. Adipisci
                amet asperiores aspernatur beatae consectetur consequatur cupiditate dolore dolorem
                dolores doloribus ea earum eius eligendi esse eveniet explicabo in ipsa itaque iusto
                omnis placeat praesentium quam ratione repellendus reprehenderit saepe sit soluta
                unde, velit veniam! Aut cupiditate deleniti dolor doloribus dolorum earum,
                exercitationem laudantium maiores, mollitia natus neque reiciendis sed sequi
                suscipit ullam vel, voluptas! Dicta iure, labore!
              </span>
            </DescriptionContainer>
          </InstructionsContainer>
          <RecipeItemCategoriesContainer>
            <h2>Category</h2>
          </RecipeItemCategoriesContainer>
        </MainSection>

        <RelatedRecipeContainer>
          <h1>Related recipe</h1>
          <RelatedRecipe>
            <RelateRecipePic />
            <span>STAKE NYAM NYAM</span>
          </RelatedRecipe>
          <RelatedRecipe>
            <RelateRecipePic />
            <span>STAKE NYAM NYAM</span>
          </RelatedRecipe>
          <RelatedRecipe>
            <RelateRecipePic />
            <span>STAKE NYAM NYAM</span>
          </RelatedRecipe>
        </RelatedRecipeContainer>
      </RecipeItemsSection>
    </RecipeItemsContainer>
  )
}

export default RecipeItems
