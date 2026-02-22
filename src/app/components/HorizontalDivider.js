export default function HorizontalDivider({
  width = 'w-full',
  color = 'bg-gray-300',
  margin = '',
}) {
  return (
    <div className="flex justify-center">
      <div className={`h-px ${width} ${color} ${margin}`} />
    </div>
  );
}
