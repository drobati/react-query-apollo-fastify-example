function Menu({ checked }) {
  console.log(checked);
  const count = Object.entries(checked).filter(([key, value]) => !!value)
    .length;
  return (
    <div class="ph3 ph5-ns pv2">
      <div class="mw8 center">
        <div class="dt-ns dt--fixed-ns w-100">
          <div class="pa3 pa4-ns dtc-ns v-mid">
            <div>
              <p class="fw4 blue ma0">{count} Selected</p>
            </div>
          </div>
          <div class="pa3 pa4-ns dn dtc-ns v-mid tr">
            <a
              href="#"
              class="no-underline f6 tc pv3 ph4 bg-animate bg-blue hover-bg-dark-blue white br2"
            >
              Add Dessert
            </a>
            <a
              href="#"
              class="no-underline f6 tc pv3 ph4 ml2 bg-animate bg-blue hover-bg-dark-blue white br2"
            >
              Delete Dessert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
