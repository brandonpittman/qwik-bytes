import { component$, useStylesScoped$, useTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { InitialValues } from "@modular-forms/qwik";
import { formAction$, reset, useForm, valiForm$ } from "@modular-forms/qwik";
import type { Input } from "valibot";
import { email, minLength, object, string } from "valibot";

const schema = object({
  email: string([email()]),
  password: string([minLength(6)]),
});

type LoginForm = Input<typeof schema>;

export const useLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  email: "",
  password: "",
}));

// @ts-expect-error
export const useAction = formAction$<LoginForm>((data) => {
  console.log(data);

  return { data: "hi", status: "success" };
}, valiForm$(schema));

export default component$(() => {
  const [loginForm, { Form, Field }] = useForm<LoginForm>({
    loader: useLoader(),
    action: useAction(),
    validate: valiForm$(schema),
  });

  useTask$(({ track }) => {
    track(() => loginForm.response.data);

    if (loginForm.response.status === "success") {
      alert(loginForm.response.data);
    }
  });

  useStylesScoped$(`
    * + * {
      margin-block-start: 1rem;
    }

    [data-error] {
      color: red;
    }
    `);

  return (
    <div>
      <h2>Modular Forms · Valibot Validation</h2>
      <pre>{JSON.stringify(loginForm.response.data)}</pre>
      <Form keepResponse>
        <Field name="email">
          {(field, props) => (
            <div>
              <label>
                <span>Email:</span>
                <input type="email" value={field.value} {...props} />
              </label>
              <p data-error>{field.error}</p>
            </div>
          )}
        </Field>

        <Field name="password">
          {(field, props) => (
            <div>
              <label>
                <span>Password:</span>
                <input type="password" value={field.value} {...props} />
              </label>
              <p data-error>{field.error}</p>
            </div>
          )}
        </Field>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <button type="button" onClick$={() => reset(loginForm)}>
            Reset
          </button>
        </div>
      </Form>
    </div>
  );
});
