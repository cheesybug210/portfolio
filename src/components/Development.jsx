export default function Development() {
    return <div>
        <h1 id="development">Development</h1>
        <h3 id="link-to-deployed-website">Link to Deployed Website</h3>
        <p><a href="https://cheesybug210.github.io/development">https://cheesybug210.github.io/development</a></p>
        <h3 id="goal-and-value-of-the-application">Goal and Value of the Application</h3>
        <p>The application is the online ordering page for a bakery. It allows the user to sort and filter by different criteria, add items to a cart, and see the total price for the items.</p>
        <h3 id="usability-principles-considered">Usability Principles Considered</h3>
        <ul>
            <li>The filter box is placed on the left of the items, similar to other shopping websites. This ensures that users are already familiar with the website structure.</li>
            <li>The items are placed centrally, next to the filter box, also similar to other shopping websites.</li>
            <li>The cart is at the bottom. This is so that the user can just scroll down and see the items they have in their cart, along with their quantities and total price. This would usually be on a separate page, but for simplicity, it is on the same page.<h3 id="organization-of-components">Organization of Components</h3>
            </li>
            <li><code>App</code> is the main component, containing all other JSX and the <code>FilterBar</code>, <code>BakeryItem</code>, and <code>Cart</code> components.<ul>
                <li>The cart contents, <code>sort</code>, <code>type</code>, and <code>allergens</code> are stored in App as state</li>
            </ul>
            </li>
            <li><code>FilterBar</code> represents the filter bar on the left and contains Material UI form components<ul>
                <li>There is no state besides the props passed in</li>
            </ul>
            </li>
            <li><code>BakeryItem</code> represents the card displaying the item information<ul>
                <li>There is no state - everything related to the cart is handled in <code>App</code></li>
            </ul>
            </li>
            <li><code>Cart</code> represents the shopping cart displaying the products, quantities, and prices, with overall price<ul>
                <li>There is no state besides the <code>cart</code> prop passed in </li>
            </ul>
            </li>
        </ul>
        <h3 id="how-data-is-passed-down-through-components">How Data is Passed Down Through Components</h3>
        <ul>
            <li><code>App</code><ul>
                <li>There are no props passed into it</li>
            </ul>
            </li>
            <li><code>FilterBar</code><ul>
                <li>The props passed into it are the state variables and setState functions for the <code>sort</code>, <code>type</code>, and <code>allergens</code> states</li>
            </ul>
            </li>
            <li><code>BakeryItem</code><ul>
                <li>The props passed into it are the image file path, item name, price, calories, allergens, and description, as well as a function to add items to the cart</li>
            </ul>
            </li>
            <li><code>Cart</code><ul>
                <li>The props passed into it are the <code>cart</code> state variable, the <code>setCart</code> state setting function to reset the state, and an <code>addToCart</code> function which adds items to the cart from the cart itself<h3 id="how-the-user-triggers-state-changes">How the User Triggers State Changes</h3>
                    The user triggers state changes in a number of ways:</li>
            </ul>
            </li>
            <li>By clicking the Reset filters button in the <code>FilterBox</code>, which modifies the <code>sort</code>, <code>type</code>, and <code>allergens</code> state variables</li>
            <li>By clicking a radio button or checkbox in the <code>FilterBox</code>, which modifies the relevant state variable</li>
            <li>By clicking the Add to Cart button in a <code>BakeryItem</code>, which modifies the <code>cart</code> state variable</li>
            <li>By clicking the trash, minus, plus, or Empty cart buttons in the <code>Cart</code> component, which modifies the <code>cart</code> state variable.</li>
        </ul>
    </div>
}
