import { OrganizationList, UserButton } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <div className='relative'>
      <div className='absolute z-10 right-4 top-4 xs:right-10'>
        <UserButton afterSignOutUrl='/' />
      </div>

      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl='/organization/:id'
        afterCreateOrganizationUrl='/organization/:id'
      />
    </div>
  );
}
