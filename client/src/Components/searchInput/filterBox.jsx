export function FilterBox({ changeCategory }) {
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-min-h-3.5 tw-bg-gray-100">
      <div className="tw-relative tw-w-80 ">
        <select
          className="tw-appearance-none tw-cursor-pointer tw-bg-transparent tw-border-none tw-outline-none tw-w-full tw-text-gray-700 tw-p-2 tw-rounded-lg tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
          onChange={(e) => changeCategory(e.target.value)}
        >
          <option value="">Select package type</option>
          <option value="Adventure">Adventure</option>
          <option value="Honeymoon">Honeymoon</option>
          <option value="Family">Family</option>
          <option value="Group">Group</option>
          <option value="Solo">Solo</option>
          <option value="Couple">Couple</option>
          <option value="Luxury">Luxury</option>
          <option value="Other">Other</option>
        </select>

      </div>
    </div>
  );
}
