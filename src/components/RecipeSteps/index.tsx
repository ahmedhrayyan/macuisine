import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface IRecipeSteps {
  steps: IRecipe["analyzedInstructions"][number]["steps"];
}

export default function RecipeSteps({ steps }: IRecipeSteps) {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {steps.map((step) => (
          <AccordionItem key={step.number} value={`step-${step.number}`}>
            <AccordionTrigger>Step: {step.number.toString().padStart(2, "0")}</AccordionTrigger>
            <AccordionContent>
              <dl className="mb-4">
                <dt className="font-semibold">Ingredients:</dt>
                <dt className="mb-2.5">{step.ingredients.map((ingredient) => ingredient.name).join(", ")}</dt>
                <dt className="font-semibold">Equipments:</dt>
                <dt>
                  <>
                    {!!step.equipment.length && step.equipment.map((item) => item.name).join(", ")}
                    {!step.equipment.length && "No equipment needed"}
                  </>
                </dt>
              </dl>
              <p className="text-base">{step.step}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
