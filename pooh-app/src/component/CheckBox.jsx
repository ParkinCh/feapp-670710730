<label className="flex items-center gap-2">
  <input type="checkbox"
         checked={watched}                            // checkbox ใช้ checked ไม่ใช่ value
         onChange={(e) => setWatched(e.target.checked)} />
  ดูแล้ว
</label>